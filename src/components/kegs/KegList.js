import React, { Component } from 'react';
import { v4 } from 'uuid';
import { Accordion, Row, Col, Button } from 'react-bootstrap';
import kegData from '../../data/kegData';
import Keg from './Keg';

export default class KegList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kegList: kegData,
      showKegForm: false
    }
  }

  handleSellClick = (index) => {
    let tempList = this.state.kegList;
    tempList[index].remainingPints -= 1;
    this.setState({
      kegList: tempList
    })
  }

  handleForm = () => {
    this.setState(prevState => ({
      showKegForm: !prevState.showKegForm
    }))
  }

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
            <Accordion>
              {renderKegs(this.state.kegList)}
            </Accordion>
          </Col>
        </Row>
      </>
    )
  }
}