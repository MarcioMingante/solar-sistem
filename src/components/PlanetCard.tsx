import './PlanetCard.css';

type PlanetCardProps = {
  planetName: string,
  planetImage: string,
  className: string
};

function PlanetCard({ planetName, planetImage, className }: PlanetCardProps) {
  const mesage = `Planeta ${planetName}`;

  return (
    <div className="card" data-testid="planet-card">
      <div className={ className }>
        <img src={ planetImage } alt={ mesage } />
      </div>
      <div className="text">
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    </div>
  );
}

export default PlanetCard;
