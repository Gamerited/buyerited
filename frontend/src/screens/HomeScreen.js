import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../component/products';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';

export default function HomeScreen() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProduct(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }

        };
        fetchdata();
    }, [])

    return (
        <div>
            {loading ? <LoadingBox></LoadingBox>
                :
                error ? <MessageBox variant="danger">{error}</MessageBox>
                    :
                    <div className="row center">
                        {
                            product.map((products) => (
                                <Products key={products._id} products={products}></Products>
                            ))
                        }

                    </div>
            }

        </div>
    );
}
