import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

export default function AddKeg({submit, change, keg}) {
  return(
    <Form id="keg-form" onSubmit={submit}>
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label>Keg name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="ELYSIAN SPACE DUST IPA" 
            required 
            onChange={e => change(e, "name")}
            value={keg.name}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="keg-brand">
          <Form.Label>Keg Brand</Form.Label>
          <Form.Control
            type="text" 
            placeholder="Elysian" 
            required
            onChange={e => change(e, "brand")}
            value={keg.brand}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="keg-flavor">
          <Form.Label>Keg Flavor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Caramel"
            required
            onChange={e => change(e, "flavor")}
            value={keg.flavor}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="keg-price">
          <Form.Label>Price per Pint (USD)</Form.Label>
          <Form.Control
            type="number"
            min="0"
            max="100" 
            required
            onChange={e => change(e, "price")}
            value={keg.price}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="keg-alcohol-content">
          <Form.Label>Alcohol Content %</Form.Label>
          <Form.Control
            type="number" 
            min="0" 
            max="100" 
            required
            onChange={e => change(e, "alcoholContent")}
            value={keg.alcoholContent}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="keg-pints">
          <Form.Label>Total Pints in Keg</Form.Label>
          <Form.Control 
          type="number" 
          min="0" 
          max="124" 
          required 
          onChange={e => change(e, "remainingPints")}
          value={keg.remainingPints}
        />
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