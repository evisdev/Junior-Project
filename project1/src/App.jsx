import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [time, setTime] = useState('');

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TopBar setTime={setTime} />} />
          <Route path="/contact-form" element={<ContactForm time={time} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;