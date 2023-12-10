import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditOrder = () => {
  const [driverType, setDriverType] = useState("");
  const [rentalDate, setRentalDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passengerCount, setPassengerCount] = useState(0);
  const [carId, setCarId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOrderById();
  }, []);

  const updateOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/orders/${id}`, {
        tipe_driver: driverType,
        tanggal_sewa: rentalDate,
        waktu_jemput_atau_antar: pickupTime,
        jumlah_penumpang: passengerCount,
        cars_id: carId,
      });
      navigate("/orders");
    } catch (error) {
      console.log(error);
    }
  };

  const getOrderById = async () => {
    const response = await axios.get(`http://localhost:5000/orders/${id}`);
    setDriverType(response.data.tipe_driver);
    setRentalDate(response.data.tanggal_sewa);
    setPickupTime(response.data.waktu_jemput_atau_antar);
    setPassengerCount(response.data.jumlah_penumpang);
    setCarId(response.data.cars_id);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateOrder}>
          <div className="field">
            <label className="label">Driver Type</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={driverType}
                  onChange={(e) => setDriverType(e.target.value)}
                >
                  <option value="non_driver">Non-Driver</option>
                  <option value="driver">Driver</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Rental Date</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={rentalDate}
                onChange={(e) => setRentalDate(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Pickup Time</label>
            <div className="control">
              <input
                type="time"
                className="input"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Passenger Count</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={passengerCount}
                onChange={(e) => setPassengerCount(e.target.value)}
                placeholder="Passenger Count"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Car ID</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={carId}
                onChange={(e) => setCarId(e.target.value)}
                placeholder="Car ID"
              />
            </div>
          </div>
          {/* Other input fields */}
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;
