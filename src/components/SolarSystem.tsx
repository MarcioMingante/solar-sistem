import './SolarSystem.css';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div className="solar-system-container" data-testid="solar-system">
      <Title headline="Planetas" />
      <div className="solar-system-cards">
        {planets.map((planet) => (
          <PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            className={ planet.name }
            key={ planet.name }
          />
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
