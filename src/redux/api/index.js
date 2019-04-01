const axios = require('axios');

export const apiCall = (url, data, headers, method) => {
  return axios({
    method,
    url,
    data,
    headers
  });
};
