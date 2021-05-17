import React, { useEffect } from 'react'
import Products from '../component/products';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector( state => state.productList);
    const { loading, error, products} = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [])

    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>
            ):
                error ? (<MessageBox variant="danger">{error}</MessageBox>)
                    :(
                    <div className="row center">
                        {
                            products.map((products) => (
                                <Products key={products._id} products={products}></Products>
                            ))
                        }

                    </div>
                    )}

        </div>
    );
}
