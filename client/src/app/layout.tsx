'use client';
import { store } from '@/store';
import { Provider } from 'react-redux';
import LeftSidebar from '@/app/LeftSidebar';
import Image from 'next/image';
import logo from '@/assets/images/Green-Shield-Icon.png';

import 'bootstrap/dist/css/bootstrap.css';
import '@/app/layout.scss';
import '@/styles/scss/main.scss';
import { useState } from 'react';
import LayoutHeader from '@/components/Layout/Header/Header';
import LeftBar from '@/components/Layout/LeftBar/LeftBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeToggleMenu, toggleManu] = useState(true);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <div className={'main-grid'}>
            <LeftBar activeToggleMenu={activeToggleMenu} toggleManu={toggleManu} />
            <LayoutHeader></LayoutHeader>
            <div className="main-block">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
