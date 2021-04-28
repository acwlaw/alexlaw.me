import React from "react";
import Row from "react-bootstrap/Row";
import IconLink from "./IconLink";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";

const ContactIconRow = () => (
  <Row>
    <IconLink
      link="https://www.linkedin.com/in/alexcwlaw"
      source={linkedin}
      alt="linkedin"
    />
    <IconLink
      link="https://www.github.com/acwlaw"
      source={github}
      alt="github"
    />
    <IconLink link="mailto:alex.law96@gmail.com" source={email} alt="email" />
  </Row>
);

export default ContactIconRow;
