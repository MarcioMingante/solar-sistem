import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';

function App() {
  return (
    <>
      <Header />
      <SolarSystem />
      <PlanetCard planetImage="" planetName="" />
    </>
  );
}

export default App;
