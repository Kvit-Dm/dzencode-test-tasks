'use client';
import React from 'react';

import { useState } from 'react';
import './LeftSidebar.scss';

import avatar from '../assets/images/Cid.png';
import Image from 'next/image';

function LeftSidebar() {
  const [activeItem, setActiveItem] = useState('ПРИХОД');

  const menuItems = [
    'ПРИХОД',
    'ГРУППЫ',
    'ПРОДУКТЫ',
    'ПОЛЬЗОВАТЕЛИ',
    'НАСТРОЙКИ',
  ];
  return (
    <React.Fragment>
      <Image className="avatar" src={avatar} alt="avatar" />
      <div className={``}>
        <ul className="nav justify-content-center">
          {/*<Link href="/" className="hover:underline"></Link>*/}
          {menuItems.map((item) => (
            <li key={item} className="nav-item">
              <button
                className={`nav-link  ${activeItem === item ? 'active' : ''}`}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
export default LeftSidebar;
