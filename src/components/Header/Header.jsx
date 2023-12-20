import React, { useState } from 'react';
import "./Header.css";
import Outstation from '../OutstationForm/Outstation';
import Airport from '../AirportForm/Airport';
import Local from '../LocalForm/Local';

const Header = () => {
    const [selectedOption, setSelectedOption] = useState('Outstation');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
  return <header>
    {/* <Navbar /> */}
    <div className='wrapper'>
        
      <div className="button-container">
        <button onClick={() => handleOptionChange('Outstation')}>Outstation</button>
        <button onClick={() => handleOptionChange('Local')}>Local</button>
        <button onClick={() => handleOptionChange('Airport')}>Airport</button>
      </div>

      {selectedOption === 'Outstation' && <Outstation />}
      {selectedOption === 'Local' && <Local />}
      {selectedOption === 'Airport' && <Airport />}
    </div>
  </header>
};

export default Header;