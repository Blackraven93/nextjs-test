import { NextPage } from 'next';
import NavBar from '../components/NavBar';
import SEO from '../components/SEO';

const aBout: NextPage = () => {
  return (
    <>
      <SEO title='about'></SEO>
      <h1>About</h1>
    </>
  );
};

export default aBout;
