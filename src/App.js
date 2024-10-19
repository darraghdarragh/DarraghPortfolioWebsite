import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <About />
        <Project />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
