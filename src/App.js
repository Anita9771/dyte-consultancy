import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import { LandingPage, MainPage, SuccessPage } from './pages';

function App() {
  return (
   <Router>
     <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/success-page" element={<SuccessPage />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
