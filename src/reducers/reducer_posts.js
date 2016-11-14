import { FETCH_DATA } from '../actions/types';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
