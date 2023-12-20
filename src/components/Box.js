// src/components/Box.js
import React from 'react';
import './Box.css'; // Import the Box component styles

const Box = ({ imageUrl, comment }) => {
  return (
    <div className="box-container">
      <img className="box-image" src={imageUrl} alt="" />
      <p className="box-comment">{comment}</p>
    </div>
  );
};

export default Box;