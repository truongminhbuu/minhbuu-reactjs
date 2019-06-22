import React, { useState } from "react";
import CartItem from '../CartItem'

export default function Headers() {
  

  return (
    <header>
      <div id="header-sticky" className="header-area box-90 sticky-header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
              <div className="logo">
                <a href="_blank"><img src="./assets/logo_shop.png" alt="" /></a>
              </div>

              <div className="category-menu">
                <h4>Category</h4>
                <ul>
                  <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Table lamp</a></li>
                  <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Furniture</a></li>
                  <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Chair</a></li>
                  <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Men</a></li>
                  <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Women</a></li>
                  <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Cloth</a></li>
                  <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Trend</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <div className="main-menu text-center">
                <nav id="mobile-menu" style={{ display: "block" }}>
                  <ul>
                    <li>
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="_blank">Pages</a>
                      <ul className="submenu">
                        <li>
                          <a href="./detail.html">Product Detail</a>
                        </li>
                        <li>
                          <a href="./login.html">login</a>
                        </li>
                        <li>
                          <a href="./register.html">Register</a>
                        </li>
                        <li>
                          <a href="./cart.html">Shoping Cart</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
              <div className="header-right f-right">
                <ul>
                  <li className="search-btn">
                    <a className="search-btn nav-search search-trigger" href="_blank"><i className="fas fa-search"></i></a>
                  </li>
                  <li className="login-btn"><a href="_blank"><i className="far fa-user"></i></a></li>
                  <li className="d-shop-cart"><a href="_blank"><i className="fas fa-shopping-cart"></i> <span className="cart-count">"CartCount"</span></a>
                    <ul className="minicart" id="minicart">
                      {/* CartItem start */}
                      
                      {/* CartItem End */}
                      <li>
                        <div className="checkout-link">
                          <a href="./cart.html">Shopping Cart</a>
                          <a className="red-color" href="_blank">Checkout</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 d-xl-none">
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}