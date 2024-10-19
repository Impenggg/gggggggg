import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <Card>
            <Card.Body>
              <Card.Title>My Skills</Card.Title>
              <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>CSS</li>
                <li>Node.js</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
