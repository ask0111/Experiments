import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                // console.log('res', response.data.products)
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error('Error fetching products', error);
            });
    }, []);

    return (
        <div className="products-ct">
            <h2>Products List</h2>
            <ul className="products-list">

                {products.map(product => (
                    <li key={product.id} className="product-card">
                        <div className='img-box'>

                            <img src={product.images[0]} alt={product.title} className="product-image" />
                        </div>
                        <div className="product-details">
                            <h3>{product.title}</h3>
                            <h6>Price: ${product.price}</h6>
                            <h6>Rating: {product.rating}/5</h6>
                        </div>
                    </li>
                ))}

            </ul>
        </div>
    );
}

export default Products;
