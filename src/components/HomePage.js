// HomePage.js
import React from 'react';
import './HomePage.css'; // Import the styles for the home page

// ... rest of the code ...
const HomePage = () => {
  // Your data containing image URLs and captions
  return (
    <div className="cards-container">
      <div className="card">
      <img src="../images/test.jpg" alt="Deskripsi gambar" width="64" height="23"/>
      <div className="card-caption">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").</div>
      </div>
      <div className="card">
        <img src='../images/images.jpeg' alt="" />
        <div className="card-caption">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself")</div>
      </div>
      <div className="card">
        <img src='../images/test.jpg' alt="Foto 2" />
        <div className="card-caption">Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself")</div>
      </div>
      {/* Add more cards as needed */}
    </div>
  );
};

export default HomePage;