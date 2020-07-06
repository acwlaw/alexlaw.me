import React from 'react';
import '../components.css';
import PropTypes from 'prop-types';

const TimelineMarker = ({ top, bottom }) => (
  <div id="timeline-wrapper">
    <div id="timeline-separator" style={{ borderColor: top ? '#2F4858' : '#E8DBC5' }} />
    <div id="timeline-marker" />
    <div id="timeline-separator" style={{ borderColor: bottom ? '#2F4858' : '#E8DBC5' }} />
    <div />
  </div>
);

TimelineMarker.defaultProps = {
  top: false,
  bottom: false,
};

TimelineMarker.propTypes = {
  top: PropTypes.bool,
  bottom: PropTypes.bool,
};

export default TimelineMarker;
