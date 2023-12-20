
import React, { useState } from 'react';
import "./Airport.css";
const Airport = () => {
  const [from, setFrom] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [pickUpAt, setPickUpAt] = useState('');
  const [tripType, setTripType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { from, pickUpDate, pickUpAt, tripType });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label>From:</label>
        <input placeholder='Start typing city' type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div className="form-field">
        <label>Pick Up Date:</label>
        <input type="date" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
      </div>
      <div className="form-field">
        <label>Pick Up At:</label>
        <input type="time" value={pickUpAt} onChange={(e) => setPickUpAt(e.target.value)} />
      </div>
      <div className="form-field">
        <label>Trip Type:</label>
        <select  value={tripType} onChange={(e) => setTripType(e.target.value)}>
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
        </select>
      </div>
      <div className="form-field">
        <button type="submit">Explore Cabs</button>
      </div>
    </form>
  );
};

export default Airport;
