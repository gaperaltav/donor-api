import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Navbar = () => (
    <AppBar position="sticky" >
        <Toolbar>
            <Typography variant="h4" >
                Blood donor
            </Typography>
        </Toolbar>
    </AppBar>
)
