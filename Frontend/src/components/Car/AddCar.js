import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [plate, setPlate] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  const [rentPerDay, setRentPerDay] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [description, setDescription] = useState("");
  const [availableAt, setAvailableAt] = useState("");
  const [transmission, setTransmission] = useState("");
  const [available, setAvailable] = useState(true);
  const [type, setType] = useState("");
  const [year, setYear] = useState(0);
  const [options, setOptions] = useState([]);
  const [specs, setSpecs] = useState([]);

  const navigate = useNavigate();

  const saveCar = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/cars", {
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        availableAt,
        transmission,
        available,
        type,
        year,
        options,
        specs,
      });
      navigate("/cars"); // Redirect to car list after saving
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveCar}>
          {/* Input fields for car properties */}
          <div className="field">
            <label className="label">Plate</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                placeholder="Plate"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Manufacture</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={manufacture}
                onChange={(e) => setManufacture(e.target.value)}
                placeholder="Manufacture"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Model</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Model"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Rent Per Day</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={rentPerDay}
                onChange={(e) => setRentPerDay(e.target.value)}
                placeholder="Rent Per Day"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Capacity</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                placeholder="Capacity"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                className="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Available At</label>
            <div className="control">
              <input
                type="datetime-local"
                className="input"
                value={availableAt}
                onChange={(e) => setAvailableAt(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Transmission</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                placeholder="Transmission"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Available</label>
            <div className="control">
              <input
                type="checkbox"
                className="checkbox"
                checked={available}
                onChange={(e) => setAvailable(e.target.checked)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Type</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Type"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Year</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Options</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={options}
                onChange={(e) => setOptions(e.target.value)}
                placeholder="Options"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Specs</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={specs}
                onChange={(e) => setSpecs(e.target.value)}
                placeholder="Specs"
              />
            </div>
          </div>
          {/* Add other input fields for car properties (e.g., manufacture, model, etc.) */}
          {/* ... */}
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
