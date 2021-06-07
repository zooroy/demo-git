import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import moment from 'moment';
import { connect, useSelector } from 'react-redux';

const Index = () => {
  // console.log('props', props);
  const pp = useSelector(state => state);
  // console.log('pp', pp);

  //add layout 5
  //add fixed bug
  return (
    <Layout changeBG={pp.changeBG}>
      <h1>{pp.changeText}</h1>
      <p>今天的日期是：{moment().format('YYYY-MM-DD')}</p>
    </Layout>
  );
};

//fixed bugs vol.2

// export default connect(state => ({
//   changeText: state.changeText,
//   changeBG: state.changeBG,
// }))(Index);

export default Index;
