import React from 'react';
import { connect } from "react-redux";
import { 
  handleShowKegForm,
  handleSellKeg 
} from "../redux/actions/ActionTypes";
import { v4 } from 'uuid';
import { Accordion, Row, Button } from 'react-bootstrap';
import Keg from './Keg'
import AddKeg from './AddKeg';

function KegList(props){
  let renderKegs = arr => arr.map((keg, index) => {
    return <Keg key={v4()} kegInfo={keg} eventKey={index} onClick={() => props.handleSellKeg(index)} />
  });

  return(
    <>
      <Row className="justify-content-md-center"> 
        <h1> 
          {props.showKegForm ? "Add a Keg" : "Keg List"} 
        </h1>
      </Row>
      <Row className="justify-content-md-center add-btn"> 
        <Button 
          type="button"
          variant={props.showKegForm ? "outline-danger" : "outline-success"}
          onClick={() => props.handleShowKegForm()}
          > 
            {props.showKegForm ? "Close Form" : "Add a Keg"} 
        </Button> 
      </Row>
      {
        props.showKegForm
        ? 
        <AddKeg keg={props.newKeg}/> 
        : 
        <Accordion> {renderKegs(props.kegList)} </Accordion>
      }
    </>
  )
}

function mapStateToProps(state){
  return {
    kegList: state.kegList,
    showKegForm: state.showKegForm,
    newKeg: state.newKeg
  }
}

const mapDispatchToProps = {
  handleShowKegForm,
  handleSellKeg
}

export default connect(mapStateToProps, mapDispatchToProps)(KegList)