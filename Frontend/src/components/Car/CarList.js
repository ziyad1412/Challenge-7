import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    try {
      const response = await axios.get("http://localhost:5000/cars");
      setCars(response.data);
    } catch (error) {
      console.error("Error get cars:", error);
    }
  };

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      getCars(); // Refresh car list after deletion
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="columns mt-5 is-centered title mt-4">Table Cars</h1>
      <div className="columns mt-5 ">
        <div className="column is-full">
          <Link to={`/cars/add`} className="button is-success">
            Add New Car
          </Link>
          <div className="table-container">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Plate</th>
                  <th>Manufacture</th>
                  <th>Model</th>
                  <th>Image</th>
                  <th>Rent</th>
                  <th>Capacity</th>
                  <th>Desc</th>
                  <th>Available</th>
                  <th>Type</th>
                  <th>Year</th>
                  <th>Options</th>
                  <th>Specs</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <tr key={car.id}>
                    <td>{index + 1}</td>
                    <td>{car.plate}</td>
                    <td>{car.manufacture}</td>
                    <td>{car.model}</td>
                    <td>{car.image}</td>
                    <td>{car.rentPerDay}</td>
                    <td>{car.capacity}</td>
                    <td>{car.description}</td>
                    <td>{car.available ? "Yes" : "No"}</td>
                    <td>{car.type}</td>
                    <td>{car.year}</td>
                    <td>
                      <ul>
                        {car.options.map((option, idx) => (
                          <li key={idx}>{option}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {car.specs.map((spec, idx) => (
                          <li key={idx}>{spec}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <Link
                        to={`edit/${car.id}`}
                        className="button is-small is-info mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteCar(car.id)}
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
    </div>
  );
};

export default CarList;
