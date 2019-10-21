import React, { Component } from 'react';
import DonationCard from '../../components/donationCard/donationCard';
import { propTypes } from './propTypes';
import { Box } from '@material-ui/core';

export default class DonationList extends Component {
  render() {
    const { donations } = this.props;
    return (
      <Box display="flex" flexDirection="column" >
        {donations && donations.map((donation, i) =>
          <DonationCard
            key={i}
            title={donation.reason}
          />
        )}
      </Box>
    );
  }
}

DonationList.propTypes = propTypes;