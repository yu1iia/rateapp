import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import './layout.scss';

import { AddClass } from '../../hoc/AddClass';
import { Header } from '../header/Header';
import { Home } from '../../pages/home/Home';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Calc } from '../../pages/calc/Calc';
import { Sample } from '../../pages/sample/Sample';
import { Info } from '../../pages/info/Info';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div className="content">
        <div className="routes">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/calc" element={<Calc />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
        <Sidebar />
      </div>
    </Fragment>
  );
};

export default AddClass(Layout, 'layout');
