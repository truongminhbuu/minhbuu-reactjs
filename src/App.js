
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from "./components/Headers"
import ProductList from "./components/ProductList"
import Footers from "./components/Footers"
import Layout from './components/Layout';
import RegisterForm from './components/RegisterForm';
import LoginForm from'./components/LoginForm';

import result from "./data.json";


function App() {
  
  const [itemInCart, setitemInCart] = useState([]) 
  const sendText = (values) => itemInCart.push({...values});
  console.log(itemInCart)
  // itemInCart.push({values})
  
  return (
    <Layout data={itemInCart}>
      {/* <!-- header start --> */}
      <ProductList {...result} sendText123={sendText}/>

      {/* <!-- header end --> */}

      {/* <!-- ProductList start --> */}
      {/* <div id="productlist"></div> */}
      {/* <LoginForm /> */}
      {/* <!-- ProductList End --> */}

      {/* <!-- footer start --> */} 
            {/* <Footers /> */}
      {/* <!-- footer end --> */}

      {/* <!-- Fullscreen search --> */}
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search Entire Store..." />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- end fullscreen search --> */}

    </ Layout>
  );
}

export default App;
