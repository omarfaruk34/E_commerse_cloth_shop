import React, { useState, useEffect } from 'react';

import './Womenproduct.css'
import { Link } from "react-router-dom";




export default function WomenProduct() {
//   const [womenproducts, setwomenProducts] = useState();
// useEffect(() => {
//     fetch('http://localhost:5000/addwomenProduct')
//       .then(res => res.json())
//       .then(data => setwomenProducts(data));
//   }, []);


  
  const [womenproducts, setwomenProducts] = useState();
  const [filterData, setFilterData] = useState();
  const [filteredmenProduct, setFilteredmenProduct] = useState({
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
    fetch('http://localhost:5000/addwomenProduct')
      .then(res => res.json())
      .then(data => {
        setwomenProducts(data)
        setFilterData(data)
      })
  }, [])

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(name !== ''){
        let data = womenproducts.filter(womenproducts => womenproducts.title.toLowerCase().includes(name.toLowerCase())); 
        setFilterData(data)
    }
    else if(categori !== ''){
        let data = womenproducts.filter(womenproducts => womenproducts.categori.toLowerCase().includes(categori.toLowerCase()));
        setFilterData(data)
    }
    else if(priceFrom !== '' && priceTo !== ''){
        let data = womenproducts.filter(womenproducts => parseInt(priceFrom) <= parseInt(womenproducts.price) && parseInt(priceTo) >= parseInt(womenproducts.price));
        setFilterData(data)
        
    }
    else if(categori !== '' && name !== ''){
        let data = womenproducts.filter(womenproducts => womenproducts.title.toLowerCase().includes(name.toLowerCase()) && womenproducts.categori.toLowerCase().includes(categori.toLowerCase())); 
        setFilterData(data)
        
    }
    else if(categori !== '' && priceFrom !== '' && priceTo !== ''){
        let data = womenproducts.filter(womenproducts => parseInt(priceFrom) <= parseInt(womenproducts.price) && parseInt(priceTo) >= parseInt(womenproducts.price) && womenproducts.categori.toLowerCase().includes(categori.toLowerCase()));
        setFilterData(data)
        
    }
    else if(name !== '' && priceFrom !== '' && priceTo !== ''){
        let data = womenproducts.filter(womenproducts => parseInt(priceFrom) <= parseInt(womenproducts.price) && parseInt(priceTo) >= parseInt(womenproducts.price) && womenproducts.title.toLowerCase().includes(name.toLowerCase()));
        setFilterData(data)
    
    }
    else {
        let data = womenproducts.filter(womenproducts => womenproducts.title.toLowerCase().includes(name.toLowerCase()) && womenproducts.categori.toLowerCase().includes(categori.toLowerCase()) && parseInt(priceFrom) <= parseInt(womenproducts.price) && parseInt(priceTo) >= parseInt(womenproducts.price));
    setFilterData(data);
    }
}
console.log(filterData)

  return (
    <div className='product-area'>
          <div className="container">

          <div className="product-full-container">

          <div className="product-search margin">
          <h5>Search Product</h5>
          <form onSubmit={handleSubmit}>
            <div className=" product-input">
              <input type="text" name="name" className='text' placeholder='Your Title Name Here' onChange={e => setName(e.target.value)} />
            </div>
            <div className=" product-input">
              {/* <input type="checkbox" name="categori" id='women' className='check' value="women" onChange={e => setCategori(e.target.value)} />
              <label for="women">Women</label>
              <input type="checkbox" name="categori" id='men' className='check' value="men" onChange={e => setCategori(e.target.value)} />
              <label for="men">Men</label> */}
               <select className='select' name="categori" id="" onChange={e => setCategori(e.target.value)}>
                                    <option value="">Categori Type</option>
                                    <option value="blazers">Blazers</option>
                                    <option value="jackets">Jackets</option>
                                    <option value="Jeans">Jeans</option>
                                    <option value="pants">Pants</option>
                                    <option value="shirts">Shirts</option>
                                    <option value="dresses">Dresses</option>
                                </select>
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
                <div className="product-content-image">
                  <div className="product-content2">
                  <h3>Plus-Size Styles for <br /> Every season</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae enim natus eius animi vero, sapiente ab quo nobis sequi hic!</p>
                  </div>
                </div>
                <div className="products">
                {
              filterData?.map(item =>
                    <div key={item?._id}  className="single-product">
                        <img src={item?.image} alt="" />
                        <h3>{item?.title}</h3>
                        <p>Price: ${item?.price}</p>
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
