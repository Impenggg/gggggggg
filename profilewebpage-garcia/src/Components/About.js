// src/Components/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About Me</h1>
          <p>
            I am a passionate developer with a background in computer science. I
            enjoy coding, hiking, and learning new technologies.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
