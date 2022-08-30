import { NextPage, NextPageContext } from 'next';
import React, { ReactElement, ReactNode } from 'react';
import NavBar from './NavBar';

interface IProps {
  children?: ReactNode
}

const Layout: NextPage<IProps> = ({children}) => {
  return (
  <div>
    <NavBar />
    <div>{children}</div>
  </div>
  );
};

export default Layout;
