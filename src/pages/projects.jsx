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
            link="https://devpost.com/software/stats-on-sight"
          />
          <ProjectEntry
            icon="checkmates"
            title="Check Mates"
            description="Social media application to peer pressure friends to go to the gym."
            link={null}
          />
          <ProjectEntry
            icon="abode"
            title="Abode"
            description="Chores and expense tracking for roommates."
            link="https://devpost.com/software/abode-tn9hc8"
          />
          <ProjectEntry
            icon="personalsite"
            title="alexlaw.me"
            description="Personal portfolio website."
            link="alexlaw.me"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;