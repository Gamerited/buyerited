import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import Rating from '../component/rating';

export default function ProductsScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, products } = productDetails;

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>
            ) :
                error ? (<MessageBox variant="danger">{error}</MessageBox>
                ) : (
                    <div>
                        <Link to="/"><i class="fa fa-backward"></i> Back</Link>
                        <div className="row top">
                            <div className="col-2">
                                <img className="large" src={products.image} alt={products.name}></img>
                            </div>
                            <div className="col-1">
                                <ul>
                                    <li> <h1> {products.name} </h1>
                                    </li>
                                    <li> <Rating rating={products.rating} numReviews={products.numReviews}></Rating></li>
                                    <li> Price: ${products.price} </li>
                                    <li> <p>{products.description} </p></li>
                                </ul>
                            </div>
                            <div className="col-1">
                                <div className="card card-body">
                                    <ul>
                                        <li>
                                            <div className="row">
                                                <div> Price </div>
                                                <div className="price"> ${products.price} </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="row">
                                                <div> Status </div>
                                                <div> {products.countInStock > 0 ? (<span className="success">Avialable</span>) : (
                                                    <span className="danger"> Finished right now </span>)} </div>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="primary block">Add to <i class="fa fa-shopping-cart"></i></button>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                )}
        </div>


    )
}
