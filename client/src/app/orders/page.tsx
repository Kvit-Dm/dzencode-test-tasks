'use client';
import Link from 'next/link';
import React from 'react';
import { lorem } from 'next/dist/client/components/react-dev-overlay/ui/utils/lorem';
import '@/styles/scss/main.scss';
import './orders.scss';
import bin from '@/assets/images/bin.png';
import Image from 'next/image';

import { products, orders } from '@/app';
import * as Types from './types';
export default function Orders() {
  function openOrderHandler(id: number) {
    return;
  }

  function PriceSumHandler(arr: Types.Product[]) {
    // calculates sum of the order
    const sumUAH: number = arr.reduce((acc, curr) => {
      const price = curr.price.find((item) => item.symbol === 'USD');
      return acc + (price?.value ?? 0);
    }, 0);
    const sumUSD: number = arr.reduce((acc, curr) => {
      const price = curr.price.find((item) => item.symbol === 'USD');
      return acc + (price?.value ?? 0);
    }, 0);
    return { USD: sumUSD, UAH: sumUAH };
  }

  return (
    <div>
      <h1 className="orders-title">Заказы</h1>
      <div className="orders">
        <div className="orders-list">
          {orders.map((item: Types.Order) => {
            return (
              <>
                <div className="orders-item" key={item.id}>
                  <div
                    key={item.id}
                    className={'orders-item-content'}
                    onClick={() => openOrderHandler(item.id)}
                  >
                    <p className={'orders-item-name'}>{item.title}</p>
                    <p className={'orders-item-amount'}>
                      {item.products.length}
                      <br /> Продукта
                    </p>
                    <p className={'orders-item-date'}>{item.date}</p>
                    <p className={'orders-item-price'}>
                      {`${PriceSumHandler(item.products).USD} USD`}
                      <br />
                      {`${PriceSumHandler(item.products).UAH} UAH`}
                    </p>
                  </div>

                  <button className={'orders-item-deleteBtn'}>
                    <Image className={'w-100 h-100'} src={bin} alt={'Delete'} />
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div className="orders-details-vraper">
          <div></div>
        </div>
      </div>
    </div>
  );
}
