import React from 'react';
import './Card.css';

const Card = ({ imageSrc }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={imageSrc} alt="Card image" />
            </div>
        </div>
    );
};

export default Card;
