
import axios from 'axios';

export const fetchGeolocation = async () => {
  const response = await axios({
    method: 'get',
    url: `https://geolocation-db.com/json/`,
  });

  return response.data;
};
