import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Card.Title>About Me</Card.Title>
              <Card.Text>
                I have a background in Computer Science, and I love building websites
                and applications. In my free time, I enjoy coding, reading, and
                exploring new technologies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
