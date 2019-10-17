import { FETCH_DONATIONS_SUCCEED } from '../actionTypes';

export const getDonations = (data) => {
  return {
    type: FETCH_DONATIONS_SUCCEED,
    payload: data
  };
};