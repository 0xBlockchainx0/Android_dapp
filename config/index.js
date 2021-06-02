
const COGNITO = {
  REGION: 'us-east-1',
  USER_POOL_ID: 'us-east-1_ZIrXrwFil',
  APP_CLIENT_ID: '60cllkc27cbh07dl2pja9up1cf'
}

const CLOUDINARY = {
  UPLOAD_URL: 'https://api.cloudinary.com/v1_1/dewacajgr/image/upload',
  API_SECRET: 'WY5ecTOZsYOhI4lDloIruED44kI',
  API_KEY: '537362213638864',
  FOLDER: 'stage'
}

const API_BASE_URL = 'https://6nx7fs4wxb.execute-api.us-east-1.amazonaws.com/stage';

const MAX_IMAGE_SIZE = '10485760'

export default {
  COGNITO,
  CLOUDINARY,
  API_BASE_URL,
  MAX_IMAGE_SIZE
}