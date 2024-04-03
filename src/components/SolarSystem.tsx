import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <div>
        { planets.map((planet) => (
          <PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ planet.name }
          />
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
