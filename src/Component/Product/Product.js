import React, { useState, useEffect } from 'react';
import './Product.css'
import { Link } from "react-router-dom";



export default function Product() {
 
  const [products, setProducts] = useState();
  const [filterData, setFilterData] = useState();
  const [filteredProduct, setFilteredProduct] = useState({
      name: "",
      categori: "",
      priceFrom: 0,
      priceTo: 0,
  });
  const [name, setName] = useState("")
  const [priceFrom, setPriceFrom] = useState(0)
  const [priceTo, setPriceTo] = useState(0)
  const [categori, setCategori] = useState("")
  useEffect(() => {
    fetch('http://localhost:5000/addProduct')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilterData(data)
      })
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(name !== ''){
        let data = products.filter(products => products.title.toLowerCase().includes(name.toLowerCase())); 
        setFilterData(data)
    }
    else if(categori !== ''){
        let data = products.filter(products => products.categori.toLowerCase().includes(categori.toLowerCase()));
        setFilterData(data)
    }
    else if(priceFrom !== '' && priceTo !== ''){
        let data = products.filter(products => parseInt(priceFrom) <= parseInt(products.price) && parseInt(priceTo) >= parseInt(products.price));
        setFilterData(data)
        
    }
    else if(categori !== '' && name !== ''){
        let data = products.filter(products => products.title.toLowerCase().includes(name.toLowerCase()) && products.categori.toLowerCase().includes(categori.toLowerCase())); 
        setFilterData(data)
        
    }
    else if(categori !== '' && priceFrom !== '' && priceTo !== ''){
        let data = products.filter(products => parseInt(priceFrom) <= parseInt(products.price) && parseInt(priceTo) >= parseInt(products.price) && products.categori.toLowerCase().includes(categori.toLowerCase()));
        setFilterData(data)
        
    }
    else if(name !== '' && priceFrom !== '' && priceTo !== ''){
        let data = products.filter(products => parseInt(priceFrom) <= parseInt(products.price) && parseInt(priceTo) >= parseInt(products.price) && products.title.toLowerCase().includes(name.toLowerCase()));
        setFilterData(data)
    
    }
    else {
        let data = products.filter(products => products.title.toLowerCase().includes(name.toLowerCase()) && products.categori.toLowerCase().includes(categori.toLowerCase()) && parseInt(priceFrom) <= parseInt(products.price) && parseInt(priceTo) >= parseInt(products.price));
    setFilterData(data);
    }
}
console.log(filterData)




  return (
    <div className='product-area'>
      <div className="container">

      <div className="product-full-container">

      <div className="product-search">
          <h5>Search Product</h5>
          <form onSubmit={handleSubmit}>
            <div className=" product-input">
              <input type="text" name="name" className='text' placeholder='Your Title Name Here' onChange={e => setName(e.target.value)} />
            </div>
            <div className=" product-input">
              <input type="checkbox" name="categori" id='women' className='check' value="women" onChange={e => setCategori(e.target.value)} />
              <label for="women">Women</label>
              <input type="checkbox" name="categori" id='men' className='check' value="men" onChange={e => setCategori(e.target.value)} />
              <label for="men">Men</label>
            </div>
            <div className=" product-input">
              <input type="text" className='text' name="priceFrom" placeholder="Search by Price from" onChange={e => setPriceFrom(e.target.value)} />
            </div>
            <div className=" product-input">
              <input type="text" className='text' name="priceTo" placeholder="Search by Price to" onChange={e => setPriceTo(e.target.value)} />
            </div>
            <div className="product-button">
              <input type="submit" className='button' value="Find Product" />
            </div>
          </form>
        </div>


        <div className="product-container">
          <div className="product-content">
            <h3>Feature Product</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim natus eius animi vero, sapiente ab quo nobis sequi hic!</p>
          </div>
          <div className="products">
            {
              filterData?.map(item =>
                <div key={item?._id} className="single-product">
                  <img src={item?.image} alt="" />
                  <h3>{item?.title}</h3>
                  <p>{item?.price}</p>
                  <div className="product-cart">
                    <button className='demo'><Link to={`${item?._id}`}>Cart</Link></button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
       


        
      </div>
    </div>
  )
}
