import React from 'react';
import '../components.css';
import '../../pages/experience.css';
import PropTypes from 'prop-types';
import TimelineMarker from "./TimelineMarker";
import InfoPill from "./InfoPill";

const ExperienceEntry = ({
  top, bottom, logo, logoRequiresPadding, title, description, location, period,
}) => (
  <div style={{ display: "flex", height: "160px" }}>
    <TimelineMarker top={top} bottom={bottom} />
    <div id="experience-entry-wrapper">
      <img
        id="experience-entry-logo"
        src={require(`../../assets/${logo}.png`)}
        alt={logo}
        style={{ padding: logoRequiresPadding ? '0 25px' : '0' }}
      />
      <div id="experience-entry-text">
        <p id="experience-title">{title}</p>
        <p id="experience-description">{description}</p>
        <p id="experience-location">{location}</p>
      </div>
      <InfoPill value={period} />
    </div>
  </div>
);

ExperienceEntry.defaultProps = {
  top: false,
  bottom: false,
  logo: '',
  logoRequiresPadding: false,
  title: '',
  description: '',
  location: '',
  period: '',
};

ExperienceEntry.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  logo: PropTypes.string,
  logoRequiresPadding: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  period: PropTypes.string,
};

export default ExperienceEntry;
