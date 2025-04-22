import { products } from '@/app';
import * as Types from '@/types';
import bin from '@/assets/images/bin.png';
import Image from 'next/image';
import React from 'react';
import styles from './ListItem.module.scss';
import img from '@/assets/images/cs-450-179_400.webp';

type Props = {
  data?: Types.Product;
  key?: number;
};

export default function ListItem({ ...props }: Props) {
  return (
    props.data && (
      <div className={styles.itemBody}>
        <div key={props.key} className={styles.itemBodyContainer}>
          <div className={` ${styles.isNewIndicator} ${props.data.isNew === 1 ? styles.isNewIndicatorActive : ''} `}></div>
          <div className={styles.imageComponent}>
            <Image className="w-100 h-100" src={img} alt={'product'} />
          </div>
          <div>{props.data?.title}</div>
          {props.data.isNew === 1 && <p className={`${styles.isAvailable} text-success`}>свободен</p>}
          {props.data.isNew === 0 && <p className={styles.isAvailable}>в ремонте</p>}
          <div>
            <p className="fw-bold">{`с ${new Intl.DateTimeFormat('en-US').format(new Date(props.data.guarantee.start))}`}</p>
            <p className="fw-bold">{`по ${new Intl.DateTimeFormat('en-US').format(new Date(props.data.guarantee.end))}`}</p>
          </div>
          {props.data.isNew === 1 && <p className={`${styles.isAvailable}`}>новый</p>}
          {props.data.isNew === 0 && <p className={`${styles.isAvailable}`}>Б/У</p>}
          <div className="mx-2">
            <p className="">{`с ${new Intl.DateTimeFormat('en-US').format(new Date(props.data.guarantee.start))}`}</p>
            <p className="">{`по ${new Intl.DateTimeFormat('en-US').format(new Date(props.data.guarantee.end))}`}</p>
          </div>

          <p className="mx-2 fw-bold">
            {`${props.data.price.find((item) => item.symbol === 'USD')?.value} $`}
            <br />
            {`${props.data.price.find((item) => item.symbol === 'UAH')?.value} UAH`}
          </p>
          <p>Длинное предлинное длиннючее название групы</p>
          <p>Христорождественский Александр</p>
          <p>Длинное предлинное длиннючее название заказа</p>
          <div className="mx-2">{new Intl.DateTimeFormat('en-US').format(new Date(props.data.date))}</div>
        </div>
        <button className={styles.itemDeleteBtn}>
          <Image className={'w-100 h-100'} src={bin} alt={'Delete'} />
        </button>
      </div>
    )
  );
}
