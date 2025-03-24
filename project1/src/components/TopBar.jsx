import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="content">
      <div className="blog-section">
        <h1>What Is The Best Time To Reach You?</h1>
        <div className="custom-select-wrapper">
          <select className="time-select" name="time" id="time">
            <option value="Choose Your Time">Choose Your Time</option>
            <option value="morning">8 AM CST</option>
            <option value="morning">9 AM CST</option>
            <option value="morning">10 AM CST</option>
            <option value="morning">11 AM CST</option>
            <option value="morning">12 PM CST</option>
            <option value="morning">1 PM CST</option>
            <option value="morning">2 PM CST</option>
            <option value="morning">3 PM CST</option>
            <option value="morning">4 PM CST</option>
            <option value="morning">5 PM CST</option>
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