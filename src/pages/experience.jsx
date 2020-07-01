import React, { Component } from 'react';
// import InfoPill from '../components/experience/InfoPill.jsx';
import TimelineMarker from "../components/experience/TimelineMarker";

class Experience extends Component {
  state = {};
  render() {
    return (
      <div className="experience-section" id="experience">
        <TimelineMarker/>
      </div>
    );
  }
}

export default Experience;
