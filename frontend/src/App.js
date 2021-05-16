import React from 'react';
import Products from './component/products';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">buyerited</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map((products) => (
              <Products key={products._id} products={products}></Products>
            ))
          }

        </div>

      </main>
      <footer className="row center">
        All rights reserved

            </footer>
    </div>
  );
}

export default App;
