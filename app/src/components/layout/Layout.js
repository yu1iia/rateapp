import React, { Fragment } from 'react';
import './layout.scss';
import { AddClass } from '../../hoc/AddClass';
import { Header } from '../header/Header';
import { Home } from '../../pages/home/Home';
import { Sidebar } from '../../components/sidebar/Sidebar';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div className="content">
        <div className="routes">
          <Home />
        </div>
        <Sidebar />
      </div>
    </Fragment>
  );
};

export default AddClass(Layout, 'layout');
