import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import Shop from './screen/Shop';
import AboutUs from './screen/AboutUs';
import Register from './screen/Register';
import Login from './screen/Login';
import Error from './screen/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
