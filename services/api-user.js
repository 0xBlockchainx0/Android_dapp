import axios from 'services/axios';

export const fetchUpdateUserInfo = async ({
  userId,
  attributes,
}) => {
  await axios.patch(`users/${userId}`, { id: userId, ...attributes });
};

export const fetchPostUserInfo = async ({
  userId,
  attributes,
}) => {
  await axios.post(`users/${userId}`, { id: userId, ...attributes });
};

export const fetchAddUserPhoto = async ({
  userId,
  imageId,
  imageSrc,
}) => {
  await axios.post(`/users/photos/${userId}`, {
    image_id: imageId,
    image_src: imageSrc,
    user_id: userId,
  });
};

export const fetchGetUserPhotos = async ({
  userId,
}) => {
  return await axios.get(`users/photos/${userId}`);
};

export const fetchUserByParam = async ({
  type,
  value,
}) => {
  return await axios.get(`users/lookup`, {
    params: {
      type: type,
      value: value,
    },
  });
};