import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx/index.js';
import Benefits from './components/Benefits.jsx/index.js';
import Services from './components/Services';
import Testimonials from './components/Testimonials.jsx/index.js';
import ContactForm from './components/ContactForm.jsx/index.js';
import Footer from './components/Footer.jsx/index.js';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Header />
      <HeroSection />
      <Benefits />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default HomeScreen;
