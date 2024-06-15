import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Profesional from './components/Profesional';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import DoctorSection from './components/DoctorSection';
import HorariosMedicos from './components/HorariosMedicos';
import AboutUs from './components/AboutUs';
import ServiciosOfrecidos from './components/ServiciosOfrecidos'

function HomeScreen() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Profesional />
      <Services />
      <AboutUs />
      <Benefits />
      <ServiciosOfrecidos />
      <HorariosMedicos />
      <DoctorSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomeScreen;
