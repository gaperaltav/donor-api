import React from 'react';
import { Navbar } from '../../components';
import { Container } from '@material-ui/core';

//#00a79d

const NotFound = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <img src="/img/404.jpg" ></img>
      </Container>
    </ React.Fragment>
  );
};

export default NotFound;