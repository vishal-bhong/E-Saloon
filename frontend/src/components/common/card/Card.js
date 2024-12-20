import React from 'react';
import './Card.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Card = ({ title, description, image, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
        <div className="card-rating">{renderStars()}</div>
      </div>
    </div>
  );
};

export default Card;
