import { Container } from 'react-bootstrap';
import '../css/App.css';

import React from 'react';
import Header from './Header';
import KegList from './kegs/KegList';


export default function App() {
  return(
    <>
      <Container>
        <Header />
        <KegList />
      </Container>
    </>
  )
}