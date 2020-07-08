import React, { Component } from 'react';
import ProjectEntry from "../components/projects/ProjectEntry";
import Footer from "../components/footer";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="projects-section" id="projects">
        <div id="projects-content">
          <ProjectEntry
            icon="statsonsight"
            title="Stats on Sight"
            description="Augmented reality app featuring live game data of NHL games."
          />
          <ProjectEntry
            icon="checkmates"
            title="Check Mates"
            description="Social media application to peer pressure friends to go to the gym."
          />
          <ProjectEntry
            icon="abode"
            title="Abode"
            description="Chores and expense tracking for roommates."
          />
          <ProjectEntry
            icon="personalsite"
            title="alexlaw.me"
            description="Personal portfolio website."
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;