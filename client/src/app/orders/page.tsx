'use client';
import Link from 'next/link';
import React from 'react';
import { lorem } from 'next/dist/client/components/react-dev-overlay/ui/utils/lorem';
import '@/styles/scss/main.scss';
import './orders.scss';

export default function Orders() {
  const orderList = [
    {
      id: '',
      name: 'name1',
      itemAmount: 21,
      dateRegister: Date.now(),
      priseUSD: 210000.5,
    },
    {
      id: '',
      name: 'name2',
      itemAmount: 22,
      dateRegister: Date.now(),
      priseUSD: 220000.5,
    },
    {
      id: '',
      name: 'name3',
      itemAmount: 23,
      dateRegister: Date.now(),
      priseUSD: 230000.5,
    },
  ];

  function openOrderHandler(id: string) {
    return;
  }

  return (
    <div>
      <h1 className="orders-title d-flex ">Заказы</h1>
      <div className="orders">
        <div className="orders-list">
          {orderList.map((item) => (
            <div
              key={item.name}
              className={'orders-item'}
              onClick={() => openOrderHandler(item.id)}
            >
              <p className={'orders-item-name'}>{item.name}</p>
              <p>{item.itemAmount}</p>
            </div>
          ))}
        </div>
        <div className="orders-details"></div>
      </div>
    </div>
  );
}
