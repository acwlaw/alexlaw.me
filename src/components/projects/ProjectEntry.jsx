import React from 'react';
import '../components.css';
import '../../pages/projects.css';
import PropTypes from 'prop-types';
import InfoPill from "../InfoPill";
import arrow from '../../assets/diagonal-arrow.png';

const ProjectEntry = ({ icon, title, description, link }) => (
  <div id="project-entry-wrapper">
    <div id="project-highlight-line" />
    <img
      id="project-img"
      src={require(`../../assets/${icon}.png`)}
      alt={icon}
    />
    <div id="project-description-wrapper">
      <a id="project-title" href={link}>
        {title}
        {link !== null && <img src={arrow} alt="arrow" style={{ width: "20px", margin: "0px 15px" }} />}
      </a>
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