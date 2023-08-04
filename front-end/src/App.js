import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LoginPage />} />
        <Route path="/signup"  element = {<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
