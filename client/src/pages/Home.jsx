import React, { Component } from 'react'
import { Navbar } from '../components/common/navbar';
import { Container } from '@material-ui/core';

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Container>
                    Blood donor's app!
                </Container>
            </>
        )
    }
}
