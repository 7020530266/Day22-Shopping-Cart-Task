import React, { useState } from "react";
import Cart from "./Cart";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './App.css';


export default function App(){
  const [count, setCount] =useState(0); 

  const handleIncre = () => {
      setCount(count + 1);
      console.log(count)
  };
  return (
    <div>
      <Navbar Count1={count} />
      <Home />
      <Cart handleIncre1={handleIncre} />
      <Footer />
    </div>
  )
}