import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';


function App() {
  return (
    <>
      <body>

        {/* <!-- header start --> */}
        <Header />
        {/* <!-- header end --> */}

        <ProductList />

        <ProductItem />


        {/* <!-- footer start --> */}
        <Footer />
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
        </div> {/*<!-- end fullscreen search --> */}
      </body>
    </>
  );
}

export default App;
