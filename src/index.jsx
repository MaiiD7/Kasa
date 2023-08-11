import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/Home/index';
import StayPage from './pages/Stay';
import ErrorPage from './pages/Error';
import AboutPage from './pages/About';
import { ThemeProvider } from 'styled-components';

const theme = {
  mainColor: '#FF6060',
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/stay/:stayId' element={<StayPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);