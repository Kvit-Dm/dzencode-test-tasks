'use client';
import './page.scss';
import { products } from '@/app';

export default function Products() {
  return (
    <div>
      <div className="products-header">
        <h1>Продукты</h1>
      </div>
      <div>
        {products?.map((item, index) => (
          <div key={index} className="d-flex">
            <div>{item?.isNew}</div>
            <div>{item?.title}</div>
            <div>{item?.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
