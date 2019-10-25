import { FETCH_DONATIONS_SUCCEED } from '../actionTypes';
import api from '../../services/api';

export const getDonations = () => async (dispatch) => {

  const request = await api.fetchDonations();

  if (request) {
    const payloadData = request.data;
    dispatch({
      type: FETCH_DONATIONS_SUCCEED,
      payload: payloadData
    });
  }
};