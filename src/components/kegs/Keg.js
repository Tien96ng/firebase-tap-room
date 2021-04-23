import React from 'react';
import PropTypes from "prop-types";
import { Accordion, Card, Row, Col, Button } from 'react-bootstrap';

export default function Keg({id, kegInfo, eventKey}) {
  return (
    <Card id={id} className="accordion">
      
        <Row className="accordion-header">
          <Col sm={9}>
            <Accordion.Toggle as={Card.Header} eventKey={eventKey.toString()}>
              {kegInfo.name}
            </Accordion.Toggle>
          </Col>
          <Col>
            <span className="font-weight-bold">Remaining Pint(s): </span> {kegInfo.remainingPints}
            <Button variant="danger" size="sm" className="sell-btn">Sell</Button>
          </Col>
        </Row>

      <Accordion.Collapse eventKey={eventKey.toString()}>
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
  kegInfo: PropTypes.object,
  eventKey: PropTypes.number
};

