import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from '../../components';
import { Container, Box } from '@material-ui/core';
import { getDonations } from '../../store/actions/donations';
import DonationCard from '../../components/donationCard/donationCard';
import api from '../../services/api';
import propTypes from './propTypes';

class Home extends React.Component {

	componentDidMount() {
		api
			.fetchDonations()
			.then(data => this.props.getDonations(data.data));
	}

	render() {
		const { donations } = this.props;
		return (
			<>
				<Navbar />
				<Container>
					<Box display="flex" flexDirection="row" >
						{donations && donations.map((donation, i) =>
							<DonationCard
								key={i}
								title={donation.reason}
							/>
						)}
					</Box>
				</Container>
			</>
		);
	}
}

const mapStateToProps = ({ donations }) => ({
	donations: donations.data,
});

const mapDispatchToProps = (dispatch) => ({
	getDonations: data => dispatch(getDonations(data)),
});

Home.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Home);