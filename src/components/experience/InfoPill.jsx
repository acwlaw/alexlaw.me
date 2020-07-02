import React from 'react';
import '../components.css';
import PropTypes from 'prop-types';

const InfoPill = ({ value }) => (
  <div id="info-pill">
    <p id="info-pill-content">{value}</p>
  </div>
);

InfoPill.defaultProps = {
  value: '',
};

InfoPill.propTypes = {
  value: PropTypes.string,
};

export default InfoPill;
