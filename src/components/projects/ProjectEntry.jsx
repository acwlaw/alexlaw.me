import React from 'react';
import '../components.css';
import '../../pages/projects.css';
import PropTypes from 'prop-types';
import InfoPill from "../InfoPill";

const ProjectEntry = ({ icon, title, description }) => (
  <div id="project-entry-wrapper">
    <div id="project-highlight-line" />
    <img
      id="project-img"
      src={require(`../../assets/${icon}.png`)}
      alt={icon}
    />
    <div id="project-description-wrapper">
      <p id="project-title">{title}</p>
      <p id="project-description">{description}</p>
      <InfoPill value="test" />
    </div>
  </div>
);

ProjectEntry.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

ProjectEntry.defaultProps = {
  icon: '',
  title: '',
  description: '',
};

export default ProjectEntry;
