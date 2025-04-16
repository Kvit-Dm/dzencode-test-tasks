'use client';
import './page.scss';
import { products } from '@/app';
import { useState } from 'react';

export default function Products() {
  const options = ['ALL', 'Apple', 'Banana', 'Orange'];
  const [selected, setSelected] = useState('ALL');
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="products-header">
        <h1 className="me-4 my-2">Продукты</h1>
        <div className="d-flex flex-wrap align-items-center ">
          <div className="d-flex align-items-center me-4 my-2">
            <p className="me-2">Тип:</p>
            <div className="products-dropdown">
              <div className="products-dropdown-trigger" onClick={() => setOpen((prev) => !prev)}>
                {selected} <span>▼</span>
              </div>
              {open && (
                <div className="products-dropdown-options">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="products-dropdown-item"
                      onClick={() => {
                        setSelected(option);
                        setOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="d-flex align-items-center my-2">
            <p className="me-2">Спецификация:</p>
            <div className="products-dropdown">
              <div className="products-dropdown-trigger" onClick={() => setOpen((prev) => !prev)}>
                {selected} <span>▼</span>
              </div>
              {open && (
                <div className="products-dropdown-options">
                  {options.map((option) => (
                    <div
                      key={option}
                      className="products-dropdown-item"
                      onClick={() => {
                        setSelected(option);
                        setOpen(false);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
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
