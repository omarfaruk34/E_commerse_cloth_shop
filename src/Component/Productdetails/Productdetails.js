// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

export default function ProductDetails() {


  const [products, setProducts] = useState([]);
  const [matchedProduct, setMatchedProduct] = useState([]);
  const { productId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/addProduct/`)
      .then((res) => res.json())
      .then((data) => setMatchedProduct(data.find((products) => products._id === productId)));
  }, [productId, setMatchedProduct]);


  return (
    <div className="product-details-area">
      <div className="container">
        <div className="product-details">

          <div className="product-details-top">
            <div className="product-details-image">
              <img src={matchedProduct?.image} alt="" />
            </div>
            <div className="product-details-content">
              <h3>{matchedProduct?.title}</h3>
              <p>Price: ${matchedProduct?.price}</p>
              <h5>{matchedProduct?.short_description}</h5>


            </div>
          </div>

          <div className="product-details-bottom">
            {/* <p>{matchedProduct?.description}</p> */}
            
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
        <p>{matchedProduct?.description}</p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

          </div>

        </div>
      </div>
    </div>
  )
}
