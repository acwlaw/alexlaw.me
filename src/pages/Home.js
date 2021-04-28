import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Img from "gatsby-image";
import TextArea from "../components/TextArea";
import ContactIconRow from "../components/ContactIconRow";
import Layout from "../components/layout";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "aerialbg2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1245, webpQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const TextAreaValue = () => (
    <Col>
      <p>hi, my name is alex law</p>
      <p style={{ marginBottom: 0 }}>welcome</p>
    </Col>
  );

  return (
    <Layout>
      <Container
        className="vh-100"
        fluid="true"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Row
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
          }}
        >
          <div className="home-spacer" />
          <Col style={{ flex: 1 }}>
            <TextArea secondary={<ContactIconRow />}>
              <TextAreaValue />
            </TextArea>
          </Col>
          <Img
            className="home-img"
            style={{ borderRadius: "10px 0px 0px 10px", height: 300 }}
            fluid={data.file.childImageSharp.fluid}
            alt="image"
          />
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
