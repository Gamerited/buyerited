import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">buyerited</Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && ( 
              <span className="badge"> { cartItems.length } </span>
            )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>{/* Same here xD was a space so i f uped */}
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route> {/* Took me one hour to find that there was space in this route thing */}


        </main>
        <footer className="row center">
          All rights reserved

            </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
