/* eslint-disable react/jsx-no-undef */;
import { NextPage } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Home: NextPage = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <SEO title="Home"></SEO>
      <h1>{counter}</h1>
      <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCounter(counter + 1)}>+</button>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  )
};


export default Home;
