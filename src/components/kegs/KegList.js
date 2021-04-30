import React from 'react';
import { connect } from "react-redux";
import { 
  handleShowKegForm,
  handleKegSubmission,
  handleFormChange, 
  handleSellKeg 
} from "../redux/actions/ActionTypes";
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
        <AddKeg submit={props.KEG_SUBMISSION} change={props.handleFormChange} keg={props.newKeg}/> 
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleShowKegForm: () => {
      dispatch(handleShowKegForm())
    },
    handleKegSubmission: () => {
      dispatch(handleKegSubmission())
    },
    handleFormChange:() => {
      dispatch(handleFormChange())
    },
    handleSellKeg: (id) => {
      dispatch(handleSellKeg(id))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(KegList)