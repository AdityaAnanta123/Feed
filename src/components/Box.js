import React from 'react';
import './Box.css'; // Import file CSS untuk styling

const Box = ({ imageUrl, comment }) => {
  return (
    <div className="box-container">
      <div className="box-image-wrapper">
        <img src={imageUrl} alt="" className="box-image" />
      </div>
      <p className="box-comment">{comment}</p>
    </div>
  );
};

export default Box;
