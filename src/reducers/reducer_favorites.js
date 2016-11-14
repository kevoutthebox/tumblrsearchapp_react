import { ADD_TO_FAVORTIES,
   DELETE_FROM_FAVORITES
  } from '../actions/types';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TO_FAVORTIES:
      let newStateAdded = state.all.filter(post => post.id !== action.payload.id);
      return { ...newStateAdded, all: [...newStateAdded, action.payload] };
    case DELETE_FROM_FAVORITES:
      let newStateDeleted = state.all.filter(post => post.id !== action.payload.id);
      return { ...newStateDeleted, all: [...newStateDeleted] };
    default:
      return state;
  }
}
