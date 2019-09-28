import { FETCH_DONATIONS_SUCCEED } from '../actionTypes';

export const getDonations = () => {
  return {
    type: FETCH_DONATIONS_SUCCEED,
    payload: []
  };
};