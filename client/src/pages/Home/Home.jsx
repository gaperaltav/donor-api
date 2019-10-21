import React from 'react';
import { connect } from 'react-redux';
import { Navbar } from '../../components';
import { Container } from '@material-ui/core';
import { getDonations } from '../../store/actions/donations';
import api from '../../services/api';
import propTypes from './propTypes';
import DonationList from '../../containers/DonationList/DonationList';

class Home extends React.Component {

  componentDidMount() {
    api
      .fetchDonations()
      .then(data => this.props.getDonations(data.data));
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Container>
          <DonationList
            donations={this.props.donations}
          />
        </Container>
      </ React.Fragment>
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