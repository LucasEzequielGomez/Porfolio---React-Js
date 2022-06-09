import React from 'react';
import './App.css';
import About from './components/about/About';
import Cover from './components/cover/Cover';
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import Navbar from './components/navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cover/>
      <About/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
