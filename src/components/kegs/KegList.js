import React, { Component } from 'react';
import { v4 } from 'uuid';
import { Accordion, Row, Col, Button } from 'react-bootstrap';
import kegData from '../../data/kegData';
import Keg from './Keg';
import AddKeg from './AddKeg';

export default class KegList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kegList: kegData,
      showKegForm: false,
      newKeg: {
        name: "",
        brand: "",
        price: 1,
        alcoholContent: 1,
        flavor: "",
        remainingPints: 1
      }
    }
  }

  handleSellClick = (index) => {
    let tempList = this.state.kegList;
    tempList[index].remainingPints -= 1;
    this.setState({
      kegList: tempList
    })
  };

  handleForm = () => {
    this.setState(prevState => ({
      showKegForm: !prevState.showKegForm
    }))
  };

  handleChange = (e, field) => {
    let tempKeg = this.state.newKeg;
    tempKeg[field] = e.target.value;
    this.setState({ 
      newKeg : tempKeg,

    })
  };

  handleKegSubmission = e => {
    e.preventDefault();
    let tempKeg = this.state.newKeg;
    tempKeg.name = tempKeg.name.toUpperCase();
    tempKeg.brand = tempKeg.name.slice(0, 1).toUpperCase() + tempKeg.name.slice(1).toLowerCase();
    tempKeg.flavor = tempKeg.name.slice(0, 1).toUpperCase() + tempKeg.name.slice(1).toLowerCase();

    let emptyKeg = {
      name: "",
      brand: "",
      price: 1,
      alcoholContent: 1,
      flavor: "",
      remainingPints: 1
    }

    this.setState(prevState => ({
      kegList: prevState.kegList.concat(tempKeg),
      newKeg: emptyKeg,
      showKegForm: !prevState.showKegForm
    }));
  };

  render() {
    let renderKegs = arr => arr.map((keg, index) => {
      return <Keg key={v4()} kegInfo={keg} eventKey={index} onClick={() => this.handleSellClick(index)} />
    });

    return(
      <>
        <Row className="justify-content-md-center"> <h1> Keg List </h1> </Row>
        <Row className="justify-content-md-center add-btn"> 
          <Button type="button" variant="outline-success" onClick={() => this.handleForm()}>Add a Keg </Button> 
        </Row>
        
        <Row>
          <Col>
          {
            this.state.showKegForm 
            ? 
            <AddKeg submit={this.handleKegSubmission} change={this.handleChange} keg={this.state.newKeg} /> 
            : 
            <Accordion> {renderKegs(this.state.kegList)} </Accordion>
          }
          </Col>
        </Row>
      </>
    )
  }
}