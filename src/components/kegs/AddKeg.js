import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function AddKeg() {
  return(
    <Form id="keg-form">
      <Form.Row>
        <Form.Group as={Col} controlId="keg-name">
          <Form.Label>Keg name</Form.Label>
          <Form.Control type="text" placeholder="ELYSIAN SPACE DUST IPA" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="keg-brand">
          <Form.Label>Keg Brand</Form.Label>
          <Form.Control type="text" placeholder="Elysian" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="keg-flavor">
          <Form.Label>Keg Flavor</Form.Label>
          <Form.Control type="text" placeholder="Caramel" required/>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="keg-price">
          <Form.Label>Price per Pint (USD)</Form.Label>
          <Form.Control type="number" placeholder="$5" min="0" max="100" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="keg-alcohol-content">
          <Form.Label>Alcohol Content %</Form.Label>
          <Form.Control type="number" placeholder="5" min="0" max="100" required/>
        </Form.Group>

        <Form.Group as={Col} controlId="keg-pints">
          <Form.Label>Total Pints in Keg</Form.Label>
          <Form.Control type="number" placeholder="124" min="0" max="124" required/>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="keg-price">
          <Button className="float-right" variant="success" type="submit" >
            Submit
          </Button>
        </Form.Group>
      </Form.Row>
    </Form>
  )
}