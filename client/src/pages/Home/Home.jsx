import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar } from '../../components';
import { Container } from '@material-ui/core';
import { getDonations } from '../../store/actions/donations';
import propTypes from './propTypes';
import DonationList from '../../containers/DonationList/DonationList';

class Home extends React.Component {

  componentDidMount() {
    this.props.getDonations();
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

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDonations,
},
  dispatch
);


Home.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Home);