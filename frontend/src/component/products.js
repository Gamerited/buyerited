import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';

export default function Products(props) {
    const { products } = props;
    return (
        <div key={products._id} className="card">
            <Link to={`/product/${products._id}`}>
                <img className="medium" src={products.image} alt={products.name} />
            </Link>
            <div className="card-body">
                <Link to={`/product/${products._id}`}>
                    <h2> {products.name} </h2>
                </Link>
                <Rating rating={products.rating}
                numReviews={products.numReviews}></Rating>
                <div className="price">
                    ${products.price}
                </div>
            </div>
        </div>
    );
}