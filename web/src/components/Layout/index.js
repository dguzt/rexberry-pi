import PropTypes from 'prop-types';
import Head from 'next/head';
import {Box} from '@mui/material';
import NavBar from './NavBar';

function Layout({title, children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Rexberry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <NavBar />
        {children}
      </Box>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
