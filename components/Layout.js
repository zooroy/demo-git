import Head from 'next/head';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const Layout = props => {
  return (
    <>
      <Head>
        <title>ROY home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContent content={props.children} {...props} />
      <Footer />
    </>
  );
};

export default Layout;
