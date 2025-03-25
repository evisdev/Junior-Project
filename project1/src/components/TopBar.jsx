import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = ({ setTime }) => {
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className="content">
      <div className="blog-section">
        <h1>What Is The Best Time To Reach You?</h1>
        <div className="custom-select-wrapper">
          <select className="time-select" name="time" id="time" onChange={handleTimeChange}>
            <option value="Choose Your Time">Choose Your Time</option>
            <option value="8 AM CST">8 AM CST</option>
            <option value="9 AM CST">9 AM CST</option>
            <option value="10 AM CST">10 AM CST</option>
            <option value="11 AM CST">11 AM CST</option>
            <option value="12 PM CST">12 PM CST</option>
            <option value="1 PM CST">1 PM CST</option>
            <option value="2 PM CST">2 PM CST</option>
            <option value="3 PM CST">3 PM CST</option>
            <option value="4 PM CST">4 PM CST</option>
            <option value="5 PM CST">5 PM CST</option>
          </select>
        </div>
        <p>(All time are in CST)</p>
        <Link to="/contact-form">
          <button>
            Continue <i className="fas fa-chevron-right"></i>
          </button>
        </Link>
        <div className="terms-container">
          <div className="terms">
            <span>Terms and Conditions</span>
            <span className="divider"></span>
            <span>Privacy Policy</span>
            <span className="divider"></span>
            <span>California Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;