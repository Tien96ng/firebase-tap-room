import React, { Component } from 'react';

export default class KegList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kegList: []
    }
  }

  render() {
    return(
      <>
        <h1> Keg List </h1>
      </>
    )
  }
}