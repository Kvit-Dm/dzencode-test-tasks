'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { lorem } from 'next/dist/client/components/react-dev-overlay/ui/utils/lorem';
import '@/styles/scss/main.scss';
import './orders.scss';
import bin from '@/assets/images/bin.png';
import icon_close from '@/assets/images/icon_close.png';
import Image from 'next/image';

import { products, orders } from '@/app';
import * as Types from '@/types';
import ListItem from '@/components/ListItem/ListItem';

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(NaN);

  function openOrderHandler(id: number) {
    setSelectedOrder(id);
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
        {/*<div className={`${!selectedOrder ? 'w-100' : ''}`}>*/}
        <div className={`orders-list ${selectedOrder ? 'orders-list-hide' : ''}`}>
          {orders.map((item: Types.Order) => {
            return (
              <>
                <div className="orders-item" key={item.id}>
                  <div key={item.id} className={'orders-item-content'} onClick={() => openOrderHandler(item.id)}>
                    <p className={`orders-item-name ${selectedOrder ? 'orders-item-name-hide' : ''}`}>{item.title}</p>
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
                <div className="orders-details-bottom"></div>
              </>
            );
          })}
        </div>
        <div className={`orders-details ${selectedOrder ? 'orders-details-open' : ''}`}>
          <button
            className={`orders-details-closeBtn ${!selectedOrder ? 'orders-details-closeBtn-hide' : ''}`}
            onClick={() => setSelectedOrder(NaN)}
          >
            <Image src={icon_close} alt={''} />
          </button>
          <p className={'orders-item-name'}>{orders?.find((item) => item.id === selectedOrder)?.title}</p>
          <div className="overflow-x-auto">{products?.map((item, index) => <ListItem data={item} key={index} />)}</div>
        </div>
      </div>
    </div>
  );
}
