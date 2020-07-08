import React from 'react';
import './components.css';
import PropTypes from 'prop-types';

const InfoPill = ({ value, style }) => (
  <div id="info-pill" style={style}>
    <p id="info-pill-content">{value}</p>
  </div>
);

InfoPill.defaultProps = {
  value: '',
  style: {},
};

InfoPill.propTypes = {
  value: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

export default InfoPill;
