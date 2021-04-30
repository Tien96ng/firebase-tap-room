import React from 'react';
import { connect } from "react-redux";
import { SHOW_KEG_FORM, RESET_KEG_FORM, KEG_SUBMISSION, handleFormChange, handleSellKeg } from "../redux/actions/ActionTypes";
import { v4 } from 'uuid';
import { Accordion, Row, Col, Button } from 'react-bootstrap';
import Keg from './OLD_Keg';
import AddKeg from './OLD_AddKeg';

function KegList(props){
  let renderKegs = arr => arr.map((keg, index) => {
    return <Keg key={v4()} kegInfo={keg} eventKey={index} onClick={() => props.handleSellKeg(index)} />
  });

  return(
    <>
      {console.log(props)}
      <Row className="justify-content-md-center"> 
        <h1> 
          {props.showKegForm ? "Add a Keg" : "Keg List"} 
        </h1>
      </Row>
      {renderKegs(props.kegList)}
    </>
  )
}

function mapStateToProps(state){
  return {
    kegList: state.kegList.default,
    showKegForm: state.showKegForm,
    newKeg: state.newKeg
  }
}

const mapDispatchToProps = {
  SHOW_KEG_FORM, 
  RESET_KEG_FORM, 
  KEG_SUBMISSION, 
  handleFormChange, 
  handleSellKeg
}

export default connect(mapStateToProps, mapDispatchToProps)(KegList)