import * as actions from '../actionTypes';

const initialState = {
  meta: null,
  data: []
};

const donations = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DONATIONS_SUCCEED: {
      return {
        ...state,
        data: [
          ...state.data,
          ...action.payload,
        ]
      };
    }

    default:
      break;
  }

  return state;
};


export default donations;