import React from 'react';
import Home from '../src/screens/Home';
import Services from '../src/screens/Services';
import About from '../src/screens/About';
import Contact from '../src/screens/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div className="bg-black text-green-400 min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <div id="home">
          <Home />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
