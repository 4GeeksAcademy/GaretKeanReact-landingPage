// src/FeatureSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
const FeatureSection = () => {
  return (
    // <section className="container">
    //   <div className="row">
    //     <div className="col-md-4">
    //       <div className="card mb-4 shadow-sm">
    //         <div className="card-body">
    //           <h5 className="card-title">Feature One</h5>
    //           <p className="card-text">Description of feature one.</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-4">
    //       <div className="card mb-4 shadow-sm">
    //         <div className="card-body">
    //           <h5 className="card-title">Feature Two</h5>
    //           <p className="card-text">Description of feature two.</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-4">
    //       <div className="card mb-4 shadow-sm">
    //         <div className="card-body">
    //           <h5 className="card-title">Feature Three</h5>
    //           <p className="card-text">Description of feature three.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <Container className="py-5">
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="http://via.placeholder.com/500x325" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="http://via.placeholder.com/500x325" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="http://via.placeholder.com/500x325" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
};

export default FeatureSection;
