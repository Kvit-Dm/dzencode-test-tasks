'use client';
import { store } from '@/redux/store';
import LeftSidebar from '@/app/LeftSidebar';
import Image from 'next/image';
import logo from '@/assets/images/Green-Shield-Icon.png';
import { Provider } from 'react-redux';
import './page.scss';
import '@/styles/scss/main.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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
              <main>{children}</main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
