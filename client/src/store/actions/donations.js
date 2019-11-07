import * as actions from '../actionTypes';
import api from '../../services/api';

export const getDonations = () => async (dispatch) => {
  const request = await api.fetchDonations();
  if (request) {
    dispatch({
      type: actions.FETCH_DONATIONS_SUCCEED,
      payload: request.data,
    });
  }
};

export const AddDonation = (donation) => async (dispatch) => {
  try {
    const request = await api.createDonation(donation);
    if (request) {
      dispatch({
        type: actions.ADD_DONATION_SUCCEED,
        payload: request.data,
      });
    }
  } catch (error) {
    //TODO: get a way to handle the error.
  }
};
