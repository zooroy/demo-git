import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getApiData } from '../redux/actions';
import { fetchData } from '../api';

const Header = () => {
  const dispatch = useDispatch();
  const menuData = [
    { title: '主頁', path: '/' },
    { title: '內頁', path: '/inner-page' },
  ];

  useEffect(() => {
    dispatch(getApiData);
    // getApiData(dispatch); //my way
    // const getData = async () => {
    //   // let res = await fetch('https://jsonplaceholder.typicode.com/users');
    //   // let resdata = await res.json();
    //   let resdata = await fetchData(
    //     'https://jsonplaceholder.typicode.com/users'
    //   );
    //   console.log('res', resdata);
    // };
    // getData();
  }, []);

  return (
    <div className={styles.header}>
      {menuData.map(item => (
        <>
          <Link href={item.path}>
            <a>{item.title}</a>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Header;
