import React from "react";
import PropTypes from "prop-types";

const IconLink = ({ link, source, alt }) => (
  <a
    style={{ margin: 8 }}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="iconLink" src={source} alt={alt} />
  </a>
);

IconLink.propTypes = {
  link: PropTypes.string.isRequired,
  source: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
};

export default IconLink;
