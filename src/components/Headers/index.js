import React from "react";
import CartIem from "../CartItem";
import { a } from "react-router-dom";
import * as firebase from 'firebase';



export default function Headers(props) {
  // function clock() {// We create a new Date object and assign it to a variable called "time".
  //   var time = new Date(),
  //     // Access the "getHours" method on the Date object w ith the dot accessor.
  //     hours = time.getHours(),
  //     // Access the "getMinutes" method with the dot accessor.
  //     minutes = time.getMinutes(),
  //     seconds = time.getSeconds();
  //   document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  //   function harold(standIn) {
  //     if (standIn < 10) {
  //       standIn = '0' + standIn
  //     }
  //     return standIn;
  //   }
  // }
  // setInterval(clock, 500);
  function firebaseSignOut() {
    try {
      firebase.auth().signOut()
      console.log("firebase sign out successed")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <header>
      <div id="header-sticky" className="header-area box-90 sticky-header">

        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
              <div className="logo">
                <a to={`/`}><img src="./assets/logo_shop.png" alt="logo_shop"/></a>
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
            <div className="col-xl-7 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <div className="main-menu text-center">
                <nav id="mobile-menu" style={{ display: "block" }}>
                  <ul>
                    <li>
                      <div className="clock"></div>
                    </li>
                    <li>
                      <a href=''>Home</a>
                    </li>
                    <li>
                      <a href=''>Menu</a>
                      <ul className="submenu">
                        <li>
                          <a href=''>Product List</a>
                        </li>
                        <li>
                          <a href=''>Product Detail</a>
                        </li>
                        <li>
                          <a href=''>Login</a>
                        </li>
                        <li>
                          <a href=''>Register</a>
                        </li>
                        <li>
                          <a href=''>Carts</a>
                        </li>
                      </ul>
                    </li>

                    {/* <Route path="/details" component={ItemDetail} />
                      <Route path="/register" component={RegisterForm} />
                      <Route path="/login" component={LoginForm} /> */}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
              <div className="header-right f-right">
                <ul>
                  <div className="total-price">
                    <span className="f-left">Total: </span>
                    {/* <span className="f-right">{props.totalCart.toLocaleString()} VND</span> */}
                  </div>
                  <li className="search-btn">
                    <a className="search-btn nav-search search-trigger" href="_blank"><i className="fas fa-search"></i></a>
                  </li>

                  <li className="login-btn"><a href="_blank" ><i className="far fa-user"></i></a></li>
                  <li className="login-btn"><a href="_blank" onClick={firebaseSignOut}><i className="fas fa-sign-out-alt"></i></a></li>

                  <li className="d-shop-cart"><a href="_blank"><i className="fas fa-shopping-cart"></i> <span className="cart-count">{props.totalItem}</span></a>
                    <ul className="minicart" id="minicart">
                      {/* CartItem start */}
                      {props.data.map(ele => <CartIem {...ele} />)}

                      {/* CartItem End */}
                      <li>
                        <div className="checkout-a">
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