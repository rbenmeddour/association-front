import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Konexio from './pages/Konexio'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Konexio />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
