'use client';
import Link from 'next/link';
import React from 'react';
import { lorem } from 'next/dist/client/components/react-dev-overlay/ui/utils/lorem';
import '@/styles/scss/main.scss';
import './orders.scss';
import bin from '@/assets/images/bin.png';
import Image from 'next/image';

export default function Orders() {
  const orderList = [
    {
      id: 1,
      name: 'Длинное предлинное длиннючее название заказа',
      itemAmount: 21,
      dateRegister: Date.now(),
      priseUSD: 210000.5,
    },
    {
      id: 2,
      name: 'Длиннючее название заказа',
      itemAmount: 22,
      dateRegister: Date.now(),
      priseUSD: 220000.5,
    },
    {
      id: 3,
      name: 'Длинное предлинноеназвание заказа',
      itemAmount: 23,
      dateRegister: Date.now(),
      priseUSD: 230000.5,
    },
  ];

  function openOrderHandler(id) {
    return;
  }

  return (
    <div>
      <h1 className="orders-title">Заказы</h1>
      <div className="orders">
        <div className="orders-list">
          {orderList.map((item) => (
            <>
              <div className="orders-item" key={item.id}>
                <div
                  key={item.name}
                  className={'orders-item-content'}
                  onClick={() => openOrderHandler(item.id)}
                >
                  <p className={'orders-item-name'}>{item.name}</p>
                  <p className={'orders-item-amount'}>{item.itemAmount}</p>
                  <p className={'orders-item-dateReg'}>{item.dateRegister}</p>
                  <p className={'orders-item-prise'}>{item.priseUSD}</p>
                </div>

                <button className={'orders-item-deleteBtn'}>
                  <Image className={'w-100 h-100'} src={bin} alt={'Delete'} />
                </button>
              </div>
            </>
          ))}
        </div>
        <div className="orders-details"></div>
      </div>
    </div>
  );
}
