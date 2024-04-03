type PlanetCardProps = {
  planetName: string,
  planetImage: string,
};

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  const mesage = `Planeta ${planetName}`;

  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">{ planetName }</p>
      <img src={ planetImage } alt={ mesage } />
    </div>
  );
}

export default PlanetCard;
