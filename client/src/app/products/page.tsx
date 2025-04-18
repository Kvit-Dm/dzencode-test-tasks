'use client';
import './page.scss';
import { products } from '@/app';
import { useState } from 'react';
import ListItem from '@/components/ListItem/ListItem';

export default function Products() {
  // const typeOptions;
  // const specificationOptions;
  const typeOptions = ['ALL', 'type1', 'type2', 'type3'];
  const specificationOptions = ['ALL', 'specification1', 'specification2', 'specification3'];
  const [selectedTypeOptions, setselectedTypeOptions] = useState('ALL');
  const [selectedSpecificationOptions, setselectedSpecificationOptions] = useState('ALL');
  const [typeOptionsOpen, setTypeOptionsOpen] = useState(false);
  const [specificationOptionsOpen, setSpecificationOptionsOpen] = useState(false);

  return (
    <div>
      <div className="products-header">
        <h1 className="me-4 my-2">Продукты</h1>
        <div className="d-flex flex-wrap align-items-center ">
          <div className="d-flex align-items-center me-4 my-2">
            <p className="me-2">Тип:</p>
            <div className="products-dropdown">
              <div
                className="products-dropdown-trigger"
                onClick={() =>
                  setTypeOptionsOpen((prev) => {
                    setSpecificationOptionsOpen(false);
                    return !prev;
                  })
                }
              >
                {selectedTypeOptions} <span>▼</span>
              </div>
              {typeOptionsOpen && (
                <div className="products-dropdown-options">
                  {typeOptions.map((option) => (
                    <div
                      key={option}
                      className="products-dropdown-item"
                      onClick={() => {
                        setselectedTypeOptions(option);
                        setTypeOptionsOpen(false);
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
              <div
                className="products-dropdown-trigger"
                onClick={() =>
                  setSpecificationOptionsOpen((prev) => {
                    setTypeOptionsOpen(false);
                    return !prev;
                  })
                }
              >
                {selectedSpecificationOptions} <span>▼</span>
              </div>
              {specificationOptionsOpen && (
                <div className="products-dropdown-options">
                  {specificationOptions.map((option) => (
                    <div
                      key={option}
                      className="products-dropdown-item"
                      onClick={() => {
                        setselectedSpecificationOptions(option);
                        setSpecificationOptionsOpen(false);
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
          // <>
          //   <div key={index} className="products-list-item">
          //     <div>{item?.isNew}</div>
          //     <div>{item?.title}</div>
          //     <div>{item?.title}</div>
          //   </div>
          // </>

          <ListItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
