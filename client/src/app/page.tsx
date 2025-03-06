'use client';

import styles from "./page.module.css";
import { Provider } from 'react-redux';
import {store} from '@/redux/store'

// import React, { Suspense, useEffect, useState, lazy } from 'react';

export default function Home() {
  return(
      <Provider store={store}>
        <div className={styles['main-grid']}>
          <div className={styles['side-bar']}>
            <h3>Filters</h3>
            <div />
          </div>
          <div className={styles['header']}>
            <h1>Car Dealer</h1>
          </div>
          <div className={styles['main-block']}>
            <div >
              {/*<AlwaysLoadingComponent/>*/}
              <main>
                {/*<MainBlock/>*/}
              </main>
              {/*<MainBlock/>*/}
            </div>
          </div>
        </div>
      </Provider>
  ) ;
}
