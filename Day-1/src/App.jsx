// import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Counter from './components/button';
import './App.css'

const App = () => {

  return (
    <>
        <Navbar/> {/* function calling*/}
        <Header name = "Rajat Saini"/> {/* function calling*/}
        <Footer/> {/* function calling*/}
        <Counter/>

    </>
  );
};

export default App;