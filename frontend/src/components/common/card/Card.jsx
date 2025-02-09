import React from 'react';
// import './Card.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Card = ({ shopName, description, shopImg, mobile }) => {

  // const renderStars = () => {
  //   const stars = [];
  //   for (let i = 1; i <= 5; i++) {
  //     if (i <= rating) {
  //       stars.push(<FaStar key={i} />);
  //     } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
  //       stars.push(<FaStarHalfAlt key={i} />);
  //     } else {
  //       stars.push(<FaRegStar key={i} />);
  //     }
  //   }
  //   return stars;
  // };

  return (
    <div className="card" style={{ width : "16rem", height : "24rem"}}>
      <img src={shopImg} className="card-img-top" alt={shopName} />
      <div className="card-body overflow-hidden">
        <h5 className="card-title">{shopName}</h5>
        <div className="card-rating fw-medium">mob - {mobile}</div>
        <p className="card-description mb-1">{description}</p>
      </div>
    </div>
  );
};

export default Card;
