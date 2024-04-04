import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import './Missions.css';

function Missions() {
  return (
    <div className="missions-container" data-testid="missions">
      <Title headline="Missões" />
      <div className="missions-container-cards">
        {missions.map((mission) => (
          <MissionCard
            { ...mission }
            key={ mission.name }
          />
        ))}
      </div>
    </div>
  );
}

export default Missions;
