import * as TYPES from './types'
import * as postAPI from 'services/api-post'
import { isEmpty } from 'utils/helpers/utility'

const getPosts = (params, refresh = false) => async (dispatch, getState) => {
  try {
    const { posts: { results = [] } } = getState();
    if (!refresh && !isEmpty(results)) {
      return
    }

    const response = await postAPI.fetchGetPosts(params)
    await dispatch({
      type: TYPES.SET_POSTS,
      payload: response
    });
  } catch (error) {
    console.log('[getPosts] error => ', error);
  }
};

const setNewPost = (data) => (dispatch) => {
  dispatch({
    type: TYPES.SET_NEW_POST,
    payload: data
  })
}

const initNewPost = () => (dispatch) => {
  dispatch({
    type: TYPES.INIT_NEW_POST
  })
}

export {
  getPosts,
  setNewPost,
  initNewPost
}
