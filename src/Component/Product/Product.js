import React, { useState, useEffect } from 'react';

import './Product.css'



export default function Product() {
  const [products, setProducts] = useState();
useEffect(() => {
    fetch('http://localhost:5000/addProduct')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <div className='product-area'>
          <div className="container">
            <div className="product-container">
                <div className="product-content">
                    <h3>Feature Product</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim natus eius animi vero, sapiente ab quo nobis sequi hic!</p>
                </div>
                <div className="products">
                {
              products?.map(item =>
                    <div key={item?._id}  className="single-product">
                        <img src={item?.image} alt="" />
                        <h3>{item?.title}</h3>
                        <p>{item?.price}</p>
                        <div className="product-cart">
                            <button>Cart</button>
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
