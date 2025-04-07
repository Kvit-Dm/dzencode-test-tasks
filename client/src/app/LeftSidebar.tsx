'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './LeftSidebar.scss';

import avatar from '../assets/images/Cid.png';
import Image from 'next/image';
// import { types } from 'sass';
// import Null = types.Null;

function LeftSidebar() {
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    { name: 'ЗАКАЗЫ', href: './orders' },
    { name: 'ГРУППЫ', href: './groups' },
    { name: 'ПРОДУКТЫ', href: './products' },
    { name: 'ПОЛЬЗОВАТЕЛИ', href: './users' },
    { name: 'НАСТРОЙКИ', href: './settings' },
  ];

  useEffect(() => {
    const currentTab = window.location.href
      .replace('http://localhost:3000/', '')
      .split('/')[0];
    menuItems.map((item) => {
      if ('./' + currentTab === item.href) {
        setActiveItem(item.name);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Image className="avatar " src={avatar} alt="avatar" />
      <ul className="sidebar-nav">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`nav-item  ${activeItem === item.name ? 'active' : ''}`}
              onClick={() => setActiveItem(item.name)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default LeftSidebar;
