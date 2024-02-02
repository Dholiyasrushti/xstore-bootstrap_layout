import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Drawing from './components/Drawing';
import Aboutus from './components/Aboutus';
import Shop from './components/Shop';
function App() {
  return (
    <>
        <div className='App'>
                <Routes>
                  <Route path="/" element={<Home/>} exact />
                  <Route path="/Drawing" element={<Drawing />} exact />
                  <Route path="/Shop" element={<Shop />} exact />

                  <Route path="/Aboutus" element={<Aboutus/>} exact/>

                </Routes>
        </div>
    </>
      
  );
}

export default App;
