import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './page/Home/Home'
import DisplayInfo from './page/DisplayInfo/DisplayInfo'
import About from './page/About/About'
import Navbar from "./components/Navbar/Navbar";
import AddEdit from "./page/AddEdit/AddEdit"

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <Router>
      <Navbar title="REACT CURD"/>
      <ToastContainer position="top-center"/>
      <Routes>
        <Route  path="/" element={<Home title="Home"/>} />
        <Route  path="/add" element={<AddEdit title="Add Info"/>} />
        <Route  path="/display/:id" element={<DisplayInfo title="Display Info"/>} />
        <Route  path="/edit/:id" element={<AddEdit title="Update Info"/>} />
        <Route  path="/about" element={<About title="About"/>} />
      </Routes>
    </Router>
  );
}

export default App;
