
import * as TYPES from 'actions/types'

const initialState = {
  results: [],
  newPost: {
    userId: '',
    description: '',
    guestFemaleCount: 0,
    guestMaleCount: 0,
    guestOtherCount: 0,
    hostFemaleCount: 0,
    hostMaleCount: 0,
    hostOtherCount: 0,
    venueLocation: 'United-States#Florida#Miami',
    startDate: '',
    startTime: '',
    postType: 'HOST',
    venueId: '1',
    venueName: 'Miami',
    postTags: [],
    fee: 0
  }
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_POSTS:
      return {
        ...state,
        results: action.payload
      };
    case TYPES.SET_NEW_POST:
      return {
        ...state,
        newPost: {
          ...state.newPost,
          ...action.payload
        }
      };
    case TYPES.INIT_NEW_POST:
      return {
        ...state,
        newPost: initialState.newPost
      };
    default:
      return state;
  }
}