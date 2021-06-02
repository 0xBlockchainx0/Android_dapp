import * as TYPES from './types'
import * as userAPI from 'services/api-user'
import { isEmpty } from 'utils/helpers/utility'

const getUserPhotos = (refresh = false) => async (dispatch, getState) => {
  try {
    const { auth: { currentUser }, user: { photos = [] } } = getState();
    if (!refresh && !isEmpty(photos) && isEmpty(currentUser)) {
      return
    }

    const params = { userId: currentUser.id }
    const { Items = [] } = await userAPI.fetchGetUserPhotos(params)

    let photoArray = [];
    for (const item of Items) {
      photoArray.push(item.image_src)
    }
    await dispatch({
      type: TYPES.SET_USER_PHOTOS,
      payload: photoArray
    });
  } catch (error) {
    console.log('[getUserPhotos] error => ', error);
  }
};

export {
  getUserPhotos
}
