import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/Home/index';
import StayPage from './pages/Stay';
import ErrorPage from './pages/Error';
import AboutPage from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/stay/:stayId' element={<StayPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);