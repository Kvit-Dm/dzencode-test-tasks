'use client';

import './page.scss';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '@/styles/scss/main.scss';
import './globals.css';
import LeftSidebar from '@/app/LeftSidebar';
import Image from 'next/image';
// import React, { Suspense, useEffect, useState, lazy } from 'react';

import logo from '../assets/images/Green-Shield-Icon.png';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="main-grid">
        <div className="left-bar">
          <LeftSidebar />
        </div>
        <div className="header">
          <Image className="header-logo" src={logo} alt={'logo'} />
          <h2 className="header-title">INVENTORY</h2>
        </div>
        <div className="main-block">
          <p>Some text</p>
        </div>
      </div>
    </Provider>
  );
}
