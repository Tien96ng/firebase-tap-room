import React from 'react';
import PropTypes from "prop-types";
import { Accordion, Card, Button, Row, Col } from 'react-bootstrap';

export default function Keg({id, kegInfo}) {
  return (
    <Card id={id}>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          {kegInfo.name}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Row>
            <Col sm={3}>
              <p>
                <span className="font-weight-bold">Brand: </span>
                {kegInfo.brand}
              </p>
            </Col>
            <Col sm={3}>
              <p>
                <span className="font-weight-bold">Price: $</span>
                {kegInfo.price}
              </p>
            </Col>
            <Col sm={3}>
              <p>
                <span className="font-weight-bold">Alcohol Content: </span>
                {kegInfo.alcoholContent}%
              </p>
            </Col>
            <Col sm={3}>
              <p>
                <span className="font-weight-bold">Flavor: </span>
                {kegInfo.flavor}
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )
}

Keg.propTypes = {
  id: PropTypes.string,
  kegInfo: PropTypes.object
};

