import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddOrder = () => {
  const [driverType, setDriverType] = useState("non_driver");
  const [rentalDate, setRentalDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [passengerCount, setPassengerCount] = useState(0);
  const [carId, setCarId] = useState("");
  const navigate = useNavigate();

  const saveOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/orders", {
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

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveOrder}>
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

export default AddOrder;
