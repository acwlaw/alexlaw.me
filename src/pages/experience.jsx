import React, { Component } from 'react';
import ExperienceEntry from "../components/experience/ExperienceEntry.jsx";

class Experience extends Component {
  state = {};

  render() {
    return (
      <div className="experience-section" id="experience">
        <div>
          <ExperienceEntry
            top
            logo="amazon"
            title="Amazon"
            location="📍 Vancouver, BC"
            description="Software Development Engineer"
            period="Aug 2020 - Present"
          />
          <ExperienceEntry
            logo="apple"
            logoRequiresPadding
            title="Apple"
            location="📍 Cupertino, CA"
            description="Software Engineer Intern"
            period="May 2019 - Aug 2019"
          />
          <ExperienceEntry
            logo="bench"
            title="Bench Accounting"
            location="📍 Vancouver, BC"
            description="Software Engineer Intern"
            period="Jan 2019 - Apr 2019"
          />
          <ExperienceEntry
            logo="rbc"
            logoRequiresPadding
            title="Royal Bank of Canada"
            location="📍 Toronto, ON"
            description="iOS Developer Co-op"
            period="Sept 2018 - Dec 2018"
          />
          <ExperienceEntry
            bottom
            logo="floka"
            logoRequiresPadding
            title="Flöka"
            location="📍 Vancouver, BC"
            description="Software Engineer Intern"
            period="Apr 2018 - Aug 2018"
          />
        </div>
      </div>
    );
  }
}

export default Experience;
