import { fetchData } from '../api';
import { useState } from 'react';
// import { getApiData } from '../redux/actions';
// const axios = require('axios');

// export const roy = axios
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(res => console.log('res', res));

const data = async () => {
  // const dispatch = useDispatch();
  const dataRes = await fetchData('https://jsonplaceholder.typicode.com/users');
  console.log('dataRes', dataRes);
  return dataRes;
  // dispatch(changeName(dataRes.data[0].name));
};

// data();

// const data = () => {
//   const [res, serRes] = useState([]);
//   const data = async () => {
//     const dataRes = await fetchData(
//       'https://jsonplaceholder.typicode.com/users'
//     );
//     console.log('dataRes', dataRes.data);
//     // serRes(dataRes.data);
//     // getApiData(dataRes.data[0].name);
//   };

//   data();
// };

export default data;
