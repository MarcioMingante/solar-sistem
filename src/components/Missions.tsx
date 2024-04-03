import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <div>
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
