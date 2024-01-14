// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import ContactForm from './Components/ContactFrom';
import FormPermintaanRadiologi from './Components/FormPermintaanRadiologi';
import PermintaanRadiologiJenis from './Components/PermintaanRadiologiJenis';
import Selesai from './Components/Selesai';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/FormPermintaanRadiologi" element={<FormPermintaanRadiologi />} />
          <Route path="/PermintaanRadiologiJenis" element={<PermintaanRadiologiJenis />} />
          <Route path="/Selesai" element={<Selesai />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
