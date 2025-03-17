'use client';

import styles from './page.module.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import React, { Suspense, useEffect, useState, lazy } from 'react';

export default function Home() {
  return (
    <Provider store={store}>
      <div className={styles['main-grid']}>
        <div className={styles['side-bar']}>
          <ul className="container">
            <li>ПРИХОД</li>
            <li>ГРУППЫ</li>
            <li>ПРОДУКТЫ</li>
            <li>ПОЛЬЗОВАТЕЛИ</li>
            <li>НАСТРОЙКИ</li>
          </ul>
          <div />
        </div>
        <div className={styles['header']}>
          <h2>INVENTORY</h2>
        </div>
        <div className={styles['main-block']}>
          <div>
            {/*<AlwaysLoadingComponent/>*/}
            <main>{/*<MainBlock/>*/}</main>
            {/*<MainBlock/>*/}
          </div>
        </div>
      </div>
    </Provider>
  );
}
