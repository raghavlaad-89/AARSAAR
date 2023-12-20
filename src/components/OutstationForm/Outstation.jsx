
import React, { useState } from 'react';

const Outstation = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [pickUpAt, setPickUpAt] = useState('');
  const [tripType, setTripType] = useState('oneWay');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted:', { from, to, pickUpDate, returnDate, pickUpAt, tripType });
  };

  return (
    <form layout="inline" onSubmit={handleSubmit}>
      <div className="form-field">
        <button
          className={`trip-button ${tripType === 'oneWay' ? 'active' : ''}`}
          onClick={() => setTripType('oneWay')}
        >
          One Way
        </button>
        <button
          className={`trip-button ${tripType === 'roundTrip' ? 'active' : ''}`}
          onClick={() => setTripType('roundTrip')}
        >
          Round Trip
        </button>
      </div>
      <div className="form-field">
        <label>From:</label>
        <input placeholder='Start typing city' type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div className="form-field">
        <label>To:</label>
        <input placeholder='Start typing city' type="text" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <div className="form-field">
        <label>Pick Up Date:</label>
        <input type="date" value={pickUpDate} onChange={(e) => setPickUpDate(e.target.value)} />
      </div>
      {tripType === 'roundTrip' && (
        <div className="form-field">
          <label>Return Date:</label>
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        </div>
      )}
      <div className="form-field">
        <label>Pick Up At:</label>
        <input type="time" value={pickUpAt} onChange={(e) => setPickUpAt(e.target.value)} />
      </div>
      <div className="form-field">
        <button type="submit">Explore Cabs</button>
      </div>
    </form>
  );
};

export default Outstation;
