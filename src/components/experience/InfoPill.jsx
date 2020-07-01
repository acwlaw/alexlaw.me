import React from 'react';
import '../components.css';
import PropTypes from 'prop-types';

const InfoPill = ({ description }) => (
  <div id="info-pill">
    <p id="info-pill-content">{description}</p>
  </div>
);

InfoPill.defaultProps = {
  description: '',
};

InfoPill.propTypes = {
  description: PropTypes.string,
};

export default InfoPill;
