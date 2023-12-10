import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/orders/${id}`);
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div>
      <h1 className="columns mt-5 is-centered title mt-4">Order List</h1>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <Link to={`/orders/add`} className="button is-success">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>ID</th>
                <th>Driver Type</th>
                <th>Rental Date</th>
                <th>Pickup/Drop-off Time</th>
                <th>Passenger Count</th>
                <th>Car ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.tipe_driver}</td>
                  <td>{order.tanggal_sewa}</td>
                  <td>{order.waktu_jemput_atau_antar}</td>
                  <td>{order.jumlah_penumpang}</td>
                  <td>{order.cars_id}</td>
                  <td>
                    <Link
                      to={`edit/${order.id}`}
                      className="button is-small is-info mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteOrder(order.id)}
                      className="button is-small is-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
