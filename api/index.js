const axios = require('axios');

export const fetchData = async url => {
  let res = [];
  try {
    res = await axios.get(url);
    console.log('res', res);
  } catch (err) {
    console.log('err: ', err);
  }
  return res;
};
