import axios from 'axios'
import sha1 from 'sha1'

// import { CLOUDINARY } from 'app-config'
const CLOUDINARY = {
  UPLOAD_URL: 'https://api.cloudinary.com/v1_1/dewacajgr/image/upload',
  API_SECRET: 'WY5ecTOZsYOhI4lDloIruED44kI',
  API_KEY: '537362213638864',
  FOLDER: 'stage'
}

export const uploadImage = async (photo) => {
  const timestamp = Date.now();
  const resultString = `folder=${CLOUDINARY.FOLDER}&timestamp=${timestamp}${CLOUDINARY.API_SECRET}`;
  const signature = sha1(resultString);

  const formData = new FormData();
  formData.append('file', photo);
  formData.append('api_key', CLOUDINARY.API_KEY);
  formData.append('folder', CLOUDINARY.FOLDER);
  formData.append('timestamp', `${timestamp}`);
  formData.append('signature', `${signature}`);

  return await axios({
    method: 'post',
    url: CLOUDINARY.UPLOAD_URL,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
