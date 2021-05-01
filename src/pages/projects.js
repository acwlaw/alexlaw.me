import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import projects from "../data/projects";
import TextArea from "../components/TextArea";
import Layout from "../components/layout";

const Projects = () => {
  const imageData = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "aerialbg3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1245, webpQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  useEffect(() => {
    document.title = "Projects — Alex Law";
  }, []);

  const renderProjectItem = (project) => (
    <div className="project-item" key={project.name}>
      <a
        style={{ display: "inline-block", marginBottom: 18 }}
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        {project.name}
      </a>
      <TextArea
        secondary={(
          <Row>
            {project.tech.map((t) => (
              <p style={{ padding: "0px 15px" }} key={t}>
                {t}
              </p>
            ))}
          </Row>
        )}
      >
        <p className="project-description">{project.description}</p>
      </TextArea>
    </div>
  );

  return (
    <Layout>
      <Container className="vh-100 projects-container" fluid="true">
        <Row
          sm={2}
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Col xs={3}>
            <Img
              className="projects-img"
              style={{
                borderRadius: "0px 10px 10px 0px",
                maxWidth: 500,
              }}
              fluid={imageData.file.childImageSharp.fluid}
              alt="image"
            />
          </Col>
          <Col xs={8}>
            <Row xs={1} sm={2}>
              {projects && projects.map((project) => renderProjectItem(project))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Projects;
