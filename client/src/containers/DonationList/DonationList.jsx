import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DonationCard, NewDonationModal } from '../../components/';
import { propTypes } from './propTypes';
import { Box, Container, Fab } from '@material-ui/core';
import { getDonations } from '../../store/actions/donations';
import AddIcon from '@material-ui/icons/Add';

class DonationList extends Component {

  state = {
    isOpenNewDonationModal: false,
  }

  componentDidMount = () => {
    this.props.getDonations();
  }

  onClickAddButton = () =>
    this.setState({
      isOpenNewDonationModal: true,
    });

    onCloseModal = () => 
    this.setState({
      isOpenNewDonationModal: false,
    });

  render() {
    const { donations } = this.props;
    return (
      <Container fixed>
        <Box display="flex" flexDirection="column" >
          {donations && donations.map((donation, key) =>
            <DonationCard
              key={key}
              title={donation.reason}
            />
          )}
        </Box>
        <Fab onClick={this.onClickAddButton} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <NewDonationModal
          isOpen={this.state.isOpenNewDonationModal}
          onClose={this.onCloseModal}
        />
      </Container>
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

DonationList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(DonationList);


