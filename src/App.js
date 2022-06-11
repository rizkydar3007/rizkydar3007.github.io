import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Premium from './pages/Premium';
import DevSchool from './pages/DevSchool'

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">Codepolitan</Link>
              <Link className="nav-item nav-link" to="/">Home</Link>
              <Link className="nav-item nav-link" to="/premium">Premium</Link>
              <Link className="nav-item nav-link" to="/devschool">Devschool</Link>
        </nav>
        <div style={{ paddingTop: 60 }}>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/premium" element={<Premium/>} />
        <Route path="/devschool" element={<DevSchool/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
