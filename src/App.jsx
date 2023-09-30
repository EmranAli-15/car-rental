import React from 'react';
import Home from './pages/home/Home';
import Footer from './pages/footer/Footer';
import Navbar from './pages/navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default App;