import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const TextArea = ({ children, secondary }) => (
  <Container fluid>
    <Row>
      <div
        className="text-area-line"
        style={{ backgroundColor: "black", marginRight: 10 }}
      />
      {children}
    </Row>
    {secondary && (
      <Row style={{ marginTop: 20 }}>
        <div style={{ width: "7px", marginRight: 19 }} />
        {secondary}
      </Row>
    )}
  </Container>
);

TextArea.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.node,
};

TextArea.defaultProps = {
  secondary: undefined,
};

export default TextArea;
