import React from 'react';
import { Navbar } from '../components/common/navbar';
import { Container } from '@material-ui/core';

export default class Home extends React.Component {
	render() {
		return (
			<>
				<Navbar />
				<Container>
					Blood donor app!
        </Container>
			</>
		);
	}
}
