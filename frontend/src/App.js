import data from './data.js';

function App() {
  return (
    <div class="grid-container">
            <header class="row">
                <div>
                    <a class="brand" href="/">buyerited</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <div class="row center">
                  {
                    data.products.map(products => (
                      <div key={products._id} class="card">
                        <a href={`/product/${products._id}`}>
                            <img class="medium" src={products.image} alt={products.name} />
                        </a>
                        <div class="card-body">
                            <a href={`/product/${products._id}`}>
                                <h2> {products.name} </h2>
                            </a>
                            <div class="rating">
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                                <span>
                                    <i class="fa fa-star"></i>
                                </span>
                            </div>
                            <div class="price">
                                ${products.price}
                            </div>
                        </div>
                    </div>
                    ))
                  }
                    

                </div>

            </main>
            <footer class="row center">
                All rights reserved

            </footer>
        </div>
    );
}

export default App;
