import React, { useState, useEffect } from 'react';
import './HomeProduct.css'
// import { Link } from "react-router-dom";



export default function HomeProduct() {




    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:5000/addProduct")
            .then((res) => res.json())
            .then((data) => setProducts(data.splice(0, 4)));
    }, []);



    return (
        <div className='product-area'>
            <div className="container">
                <div className="product-container">
                    <div className="product-content">
                        <h3>Feature Product</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim natus eius animi vero, sapiente ab quo nobis sequi hic!</p>
                    </div>
                    <div className="home_products">
                            {
                                products?.map(item =>
                                    <div key={item?._id} className="home-single-product">
                                        <img src={item?.image} alt="" />
                                        <h3>{item?.title}</h3>
                                        <p>Price: {item?.price}</p>
                                        <div className="home-product-cart">
                                        {/* <button><Link to={`${item?._id}`}>Cart</Link></button> */}
                                        </div>
                                    </div>
                                )
                            }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

