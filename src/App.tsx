import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar-Comp/Navbar';
import Header from './components/Header-Comp/Header'
import Contact from './components/Contact-Comp/Contact'
import { Modal, Button } from "antd";
import { useStore } from './store/rootStore';


function App() {
  return (
    <div >
    <Navbar/>
    <Header/>
    <br/>
    <br/>
    <br/>
    <Contact/>
    </div>
  );
}

export default App;
