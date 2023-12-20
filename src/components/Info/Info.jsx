
import React from 'react';
import './Info.css'; 
import { car, driving, hand } from "../../assets"
const Info = () => {
  return (
    <div className="info-container">
      <div className="info-card">
        <img src={car} alt='img' id='car-image' />
      </div>
      <div className="info-card">
        <img src={hand} alt='img' />
        <div className="cardHeading">RETURN FARE, NOT FAIR!</div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas laboriosam consectetur dolore neque nesciunt numquam ratione maxime eos fuga sequi, ipsam odit repudiandae illo error alias officia ad impedit ab molestiae quidem?</p>
      </div>
      <div className="info-card">
        <img src={driving} alt='img' />
        <div className="cardHeading">NOW AVAILABLE ROUTES ARE!</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae accusantium illo libero asperiores maxime. Repudiandae consequatur nemo, impedit ab eius adipisci eos cupiditate vero quis facilis delectus earum esse totam aut quam!</p>
      </div>
    </div>
  );
};

export default Info;
