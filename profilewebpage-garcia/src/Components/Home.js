// src/Components/Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>Welcome to My Profile!</h1>
          <p>
            My career goal is to excel in my field and contribute to meaningful
            projects.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
