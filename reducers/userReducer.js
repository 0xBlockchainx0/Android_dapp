
import * as TYPES from 'actions/types'

const initialState = {
  photos: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_USER_PHOTOS:
      return {
        ...state,
        photos: action.payload
      };
    default:
      return state;
  }
}