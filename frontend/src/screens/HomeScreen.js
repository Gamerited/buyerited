import React from 'react'
import Products from '../component/products';
import data from '../data'; 

export default function HomeScreen() {
    return (
        <div>
            <div className="row center">
                {
                    data.products.map((products) => (
                        <Products key={products._id} products={products}></Products>
                    ))
                }

            </div>
        </div>
    );
}
