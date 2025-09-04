'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './LeftSidebar.scss';

import werehouse from '../assets/images/warehouse.png';
import Image from 'next/image';

function LeftSidebar({ parentStyleProp = '' }) {
  const [activeItem, setActiveItem] = useState('');

  const menuItems = [
    { name: 'ПРОДУКТЫ', href: './products' },
    { name: 'ЗАКАЗЫ', href: './orders' },
    { name: 'ГРУППЫ', href: './groups' },
    { name: 'ПОЛЬЗОВАТЕЛИ', href: './users' },
    { name: 'НАСТРОЙКИ', href: './settings' },
  ];

  useEffect(() => {
    const currentTab = window.location.href.replace('http://localhost:3000/', '').split('/')[0];
    menuItems.map((item) => {
      if ('./' + currentTab === item.href) {
        setActiveItem(item.name);
      }
    });
  }, []);

  return (
    <div className={parentStyleProp}>
      <Image className="avatar " src={werehouse} alt="werehouse" />
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
    </div>
  );
}

export default LeftSidebar;
