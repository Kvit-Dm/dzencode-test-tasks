'use client';

import './page.scss';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/scss/main.css';
import '@/styles/scss/main.scss';
import './globals.css';
import BootstrapClient from '@/components/BootstrapClient.js';
// import React, { Suspense, useEffect, useState, lazy } from 'react';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="main-grid">
        <div className="side-bar">
          <ul className="container">
            <li>ПРИХОД</li>
            <li>ГРУППЫ</li>
            <li>ПРОДУКТЫ</li>
            <li>ПОЛЬЗОВАТЕЛИ</li>
            <li>НАСТРОЙКИ</li>
          </ul>
          <div />
        </div>
        <div className="header">
          <h2 className="text-danger">INVENTORY</h2>
        </div>
        <div className="main-block">
          <div>
            <main>
              <div className="text-center mt-4 col-md-6 mx-auto">
                <h1 className="text-danger">Hello Bootstrap</h1>

                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first accordion body.</strong> It is
                        shown by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our
                        default variables. Also worth noting that just about any
                        HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Accordion Item #2
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the second accordion body.</strong> It
                        is hidden by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our
                        default variables. Also worth noting that just about any
                        HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Accordion Item #3
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the third accordion body.</strong> It is
                        hidden by default, until the collapse plugin adds the
                        appropriate classes that we use to style each element.
                        These classes control the overall appearance, as well as
                        the showing and hiding via CSS transitions. You can
                        modify any of this with custom CSS or overriding our
                        default variables. Also worth noting that just about any
                        HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/*<AlwaysLoadingComponent/>*/}
            <main>{/*<MainBlock/>*/}</main>
            {/*<MainBlock/>*/}
          </div>
        </div>
      </div>
    </Provider>
  );
}
