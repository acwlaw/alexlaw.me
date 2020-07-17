import React from 'react';
import '../components.css';
import '../../pages/projects.css';
import PropTypes from 'prop-types';
import InfoPill from "../InfoPill";
import arrow from '../../assets/diagonal-arrow.png';

const ProjectEntry = ({
  icon, title, description, link, technologies,
}) => (
  <div id="project-entry-wrapper">
    <div id="project-highlight-line" />
    <img
      id="project-img"
      src={require(`../../assets/${icon}.png`)}
      alt={icon}
    />
    <div id="project-description-wrapper">
      <a id="project-title" href={link} target="_blank" rel="noreferrer">
        {title}
        {link !== null && <img src={arrow} alt="arrow" style={{ width: "20px", margin: "0px 15px" }} />}
      </a>
      <p id="project-description">{description}</p>
      {technologies.map((technology) => <InfoPill value={technology} key={technology} style={{ marginRight: "10px" }} />)}
    </div>
  </div>
);

ProjectEntry.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

ProjectEntry.defaultProps = {
  icon: '',
  title: '',
  description: '',
  link: null,
  technologies: [],
};

export default ProjectEntry;
