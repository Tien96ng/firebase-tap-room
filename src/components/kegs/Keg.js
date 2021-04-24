import React from 'react';
import PropTypes from "prop-types";
import { Accordion, Card, Row, Col, Button } from 'react-bootstrap';

export default function Keg({id, kegInfo, eventKey, onClick}) {

  let text = () => {
    if(kegInfo.remainingPints === 0) {
      return "Out Of Stock";
    } else if (kegInfo.remainingPints <= 10) {
      return "Almost Empty";
    } else {
      return "Sell";
    }
  }

  return (
    <Card id={id} className="accordion">
      <Row className="accordion-header">
        <Col sm={7}>
          <Accordion.Toggle as={Card.Header} eventKey={eventKey.toString()}>
            {kegInfo.name}
          </Accordion.Toggle>
        </Col>
        <Col className="ml-auto mr-1 mt-2">
          <span className="font-weight-bold">Remaining Pint(s): </span> {kegInfo.remainingPints}
          <Button 
            variant={kegInfo.remainingPints === 0 ? "secondary" : "danger"} 
            size="sm" className="sell-btn" 
            onClick={onClick} 
            disabled={kegInfo.remainingPints === 0}>
            {text()}
          </Button>
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
                <span className="font-weight-bold">Price: </span>
                ${kegInfo.price}
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

