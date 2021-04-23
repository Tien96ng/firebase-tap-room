import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="keg icon"
            src="https://cdn4.iconfinder.com/data/icons/beer-pub/1200/Single_8CartoonPivnoyBarTok-512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Tap Room
        </Navbar.Brand>
      </Navbar>
    </>
  )
}