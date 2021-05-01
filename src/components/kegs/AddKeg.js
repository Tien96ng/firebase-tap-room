import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
  handleShowKegForm,
  handleKegSubmission,
  handleFormChange, 
  handleSellKeg 
} from "../redux/actions/actions";
import { Form, Button, Col } from 'react-bootstrap';

function AddKeg({keg, handleFormChange, handleKegSubmission}) {
  return(
    <Form id="keg-form" onSubmit={e => handleKegSubmission(e)}>
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label>Keg name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="ELYSIAN SPACE DUST IPA" 
            required 
            onChange={e => handleFormChange(e, "name")}
            value={keg.name.toUpperCase()}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="keg-brand">
          <Form.Label>Keg Brand</Form.Label>
          <Form.Control
            type="text" 
            placeholder="Elysian" 
            required
            onChange={e => handleFormChange(e, "brand")}
            value={keg.brand.slice(0, 1).toUpperCase() + keg.brand.slice(1).toLowerCase()}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="keg-flavor">
          <Form.Label>Keg Flavor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Caramel"
            required
            onChange={e => handleFormChange(e, "flavor")}
            value={keg.flavor.slice(0, 1).toUpperCase() + keg.flavor.slice(1).toLowerCase()}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="keg-price">
          <Form.Label>Price per Pint (USD)</Form.Label>
          <Form.Control
            type="number"
            min="1"
            max="1000" 
            required
            onChange={e => handleFormChange(e, "price")}
            value={keg.price}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="keg-alcohol-content">
          <Form.Label>Alcohol Content %</Form.Label>
          <Form.Control
            type="number" 
            min="1" 
            max="100" 
            required
            onChange={e => handleFormChange(e, "alcoholContent")}
            value={keg.alcoholContent}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="keg-pints">
          <Form.Label>Total Pints in Keg</Form.Label>
          <Form.Control 
          type="number" 
          min="1" 
          max="124" 
          required 
          onChange={e => handleFormChange(e, "remainingPints")}
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

AddKeg.propTypes = {
  submit: PropTypes.func,
  change: PropTypes.func,
  keg: PropTypes.object,
};

function mapStateToProps(){
  return {}
}

const mapDispatchToProps = {
  handleShowKegForm,
  handleKegSubmission,
  handleFormChange, 
  handleSellKeg
}

export default connect(mapStateToProps, mapDispatchToProps)(AddKeg)