import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Jumbotron>
            <h1>Welcome to My Profile!</h1>
            <p>
              I am passionate about web development and always looking to learn more.
              My goal is to become a full-stack developer and contribute to exciting
              projects.
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
