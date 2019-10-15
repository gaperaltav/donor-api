import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import style from './style';

const Navbar = () => (
  <AppBar style={style.AppBar} >
    <Toolbar>
      <Typography variant="h4" >
        Donor
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;