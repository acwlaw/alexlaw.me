import React from 'react';
import '../components.css';
import '../../pages/experience.css';
import PropTypes from 'prop-types';
import TimelineMarker from "./TimelineMarker";
import InfoPill from "./InfoPill";

const ExperienceEntry = ({
  logo, logoRequiresPadding, title, description, location, period,
}) => (
  <div id="experience-entry-wrapper">
    <TimelineMarker />
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
);

ExperienceEntry.defaultProps = {
  logo: '',
  logoRequiresPadding: false,
  title: '',
  description: '',
  location: '',
  period: '',
};

ExperienceEntry.propTypes = {
  logo: PropTypes.string,
  logoRequiresPadding: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.string,
  period: PropTypes.string,
};

export default ExperienceEntry;
