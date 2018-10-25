import React from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';

const Layout = (props) => {
  return (
    <div>
      <NavBar />
      {/* {props.children} */}
      <HomePage />
    </div>
  );
};

export default Layout;