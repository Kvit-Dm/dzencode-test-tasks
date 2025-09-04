'use client';
import './page.scss';
import { products } from '@/app';
import { useState, useEffect } from 'react';
import ListItem from '@/components/ListItem/ListItem';

// Testing
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/../firebaseConfig';
const auth = getAuth();

export default function Products() {
  const typeOptions = ['ALL', 'type1', 'type2', 'type3'];
  const specificationOptions = ['ALL', 'specification1', 'specification2', 'specification3'];
  const [selectedTypeOptions, setselectedTypeOptions] = useState('ALL');
  const [selectedSpecificationOptions, setselectedSpecificationOptions] = useState('ALL');
  const [typeOptionsOpen, setTypeOptionsOpen] = useState(false);
  const [specificationOptionsOpen, setSpecificationOptionsOpen] = useState(false);

  useEffect(() => {
    async function loginPublicAccount() {
      try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            "public@demo.com",
            "demo1234"
        );
        console.log("Logged in as:", userCredential.user.email);
      } catch (err) {
        console.error("Login error:", err);
      }
    }

    async function getProducts() {
      const snapshot = await getDocs(collection(db, 'products'));
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      console.log('items', items);
    }

    loginPublicAccount().then(()=> getProducts())
  }, []);

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
      <div className="">{products?.map((item, index) => <ListItem data={item} key={index} />)}</div>
    </div>
  );
}
