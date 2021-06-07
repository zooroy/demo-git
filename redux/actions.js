import { useDispatch } from 'react-redux';
import { fetchData } from '../api';

// console.log('data', data());
// const axios = require('axios');

// axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(res => res);
// const jj = fetchData('https://jsonplaceholder.typicode.com/users');
// console.log('jj', jj);
import { CHANGE_TEXT, CHANGE_BG } from './actionsType';

export const changeName = text => {
  console.log('text', text);
  return {
    type: CHANGE_TEXT,
    text: text,
  };
};

export const changeBG = bg => ({
  type: CHANGE_BG,
  background: bg,
});

// export const getApiData = res => ({
//   type: 'API_DATA', 
//   data: res,
// });

export const getApiData = async dispatch => {
  const res = await fetchData(
    'https://hacker-news.firebaseio.com/v0/item/121003.json?print=pretty'
  );
  // console.log('res', res);
  dispatch({ type: CHANGE_TEXT, text: res.data.title });
};

// const data = async () => {
//   // const dispatch = useDispatch();
//   const dataRes = await fetchData('https://jsonplaceholder.typicode.com/users');
//   // console.log('dataRes', dataRes);
//   // changeName(dataRes.data[0].name);
//   return {
//     type: 'API',
//     payload: dataRes.data[0].name
//   }
// };

// data();
