import React, { Component } from 'react';
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
    return(
      <>
        {console.log(kegData)}
        <h1> Keg List </h1>
        <Accordion defaultActiveKey="0">
          <Keg />
        </Accordion>
      </>
    )
  }
}