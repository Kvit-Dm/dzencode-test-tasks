'use client';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import LeftSidebar from '@/app/LeftSidebar';
import Image from 'next/image';
import logo from '@/assets/images/Green-Shield-Icon.png';

import 'bootstrap/dist/css/bootstrap.css';
import '@/app/page.scss';
import '@/styles/scss/main.scss';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeToggleMenu, toggleManu] = useState(true);

  function ShowUpHandler() {
    toggleManu(!activeToggleMenu);
  }

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div
            className={`main-grid  ${!activeToggleMenu ? 'main-grid-hide' : ''}`}
          >
            <div
              className={`left-bar  ${!activeToggleMenu ? 'left-bar-hide' : ''}`}
            >
              <button
                className={`left-bar-btn  ${!activeToggleMenu ? 'left-bar-btn-hide' : ''}`}
                onClick={ShowUpHandler}
              >
                <div className="left-bar-btn-shell">
                  <div
                    className={`left-bar-btn-arrow  ${!activeToggleMenu ? 'left-bar-btn-arrow-rotate' : ''}`}
                  ></div>
                </div>
              </button>
              <LeftSidebar />
            </div>
            <div className="header">
              <Image className="header-logo" src={logo} alt={'logo'} />
              <h2 className="header-title">INVENTORY</h2>
            </div>
            <div className="main-block">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
