import React, { Component } from 'react';
import { v4 } from 'uuid';
import { Accordion } from 'react-bootstrap';
import kegData from '../../data/kegData';
import Keg from './Keg';

export default class KegList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kegList: kegData
    }
  }

  render() {
    let renderKegs = arr => arr.map(keg => {
      return <Keg id={v4()} kegInfo={keg} />
    });


    return(
      <>
        {console.log(kegData[0])}
        <h1> Keg List </h1>
        <Accordion>
          {renderKegs(this.state.kegList)}
        </Accordion>
      </>
    )
  }
}