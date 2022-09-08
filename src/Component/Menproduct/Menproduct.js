import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// import './Product.css'



export default function Menproduct() {
  const [menproducts, setmenProducts] = useState();
useEffect(() => {
    fetch('http://localhost:5000/addmenProduct')
      .then(res => res.json())
      .then(data => setmenProducts(data));
  }, []);
  return (
    <div className='product-area'>
          <div className="container">
            <div className="product-container">
            <div className="product-content-image">
                  <div className="product-content2">
                  <h3>Plus-Size Styles for<span>Every season</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim natus eius animi vero, sapiente ab quo nobis sequi hic!</p>
                  </div>
                </div>
                <div className="products">
                {
              menproducts?.map(item =>
                    <div key={item?._id}  className="single-product">
                        <img src={item?.image} alt="" />
                        <h3>{item?.title}</h3>
                        <p>Price: ${item?.price}</p>
                        <div className="product-cart">
                            <button><Link to={`${item?._id}`}>Cart</Link></button>
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
