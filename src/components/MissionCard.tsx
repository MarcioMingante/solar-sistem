import './MissionCard.css';
import locationSVG from '../images/Location.svg';
import flag from '../images/Vector.svg';
import date from '../images/Date.svg';

type MissionCardProps = {
  name: string,
  year: string,
  country: string,
  destination: string
};

function MissionCard({ name, year, country, destination }: MissionCardProps) {
  return (
    <div className="mission-card" data-testid="mission-card">
      <div className="mission-card-title">
        <p data-testid="mission-name">{ name }</p>
      </div>
      <span className="mission-card-info">
        <div className="mission-card-info-main">
          <div className="mission-card-format">
            <img src={ date } alt="calendario" />
            <p data-testid="mission-year">{ year }</p>
          </div>
          <div className="mission-card-format">
            <img src={ locationSVG } alt="" />
            <p data-testid="mission-country">{ country }</p>
          </div>
        </div>
        <div className="mission-card-format mission-card-destination">
          <img src={ flag } alt="" />
          <p data-testid="mission-destination">{ destination }</p>
        </div>
      </span>
    </div>
  );
}

export default MissionCard;
