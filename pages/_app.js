import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';
import { getApiData } from '../redux/actions';
// import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../api';

function MyApp({ Component, pageProps }) {
  // console.log('QQ', res);
  // useEffect(() => {
  //   // dispatch(getApiData)
  //   // console.log('qq',dispatch(getApiData))
  //   const data = async () => {
  //     const dataRes = await fetchData(
  //       'https://jsonplaceholder.typicode.com/users'
  //     );
  //     console.log('dataRes', dataRes.data);
  //     changeName(dataRes.data[0].name);
  //     // useDispatch(() => changeName());
  //   };

  //   data();
  // }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
