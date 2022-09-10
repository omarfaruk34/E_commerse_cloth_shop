import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Menproductdetails.css";
import Accordion from 'react-bootstrap/Accordion';



export default function MenproductDetails() {
 

    const [menproducts, setmenProducts] = useState([]);
    const [matchedMenproduct, setMatchedMenproduct] = useState([]);
    const { menproductId } = useParams();
    useEffect(() => {
      fetch(`http://localhost:5000/addmenProduct/`)
        .then((res) => res.json())
        .then((data) => setMatchedMenproduct(data.find((menproducts) => menproducts._id === menproductId)));
    }, [menproductId, setMatchedMenproduct]);



    const [review, setReview] = useState({
      review: "",
      rating: "",
    });
    const [reviewPost, setReviewPost]= useState([])
  
    const handleReview = (e) => {
      setReview({
        ...review,
        title: matchedMenproduct?.title,
        [e.target.name]: e.target.value,
      });
    };
    const handleReviewSubmit = async (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/reviews", review).then((res) => {
        if (res.status === 200) {
          alert("review done");
        }
      });
    };
  
  
  
  
  
    console.log(reviewPost)
    const [orders, setOrder] = useState({
      title: matchedMenproduct?.title,
      price: matchedMenproduct?.price,
      name: "",
      email: "",
      number: "",
      date: new Date(),
      status: "not paid yet",
      test: "test",
    });
    const handleOrder = (e) => {
      setOrder({
        ...orders,
        [e.target.name]: e.target.value,
        title: matchedMenproduct?.title,
        price: matchedMenproduct?.price,
      });
    };
    const handleOrderSubmit = async (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/orders", orders).then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Order in pending now");
        }
      });
    };

  return (
    <div className="product-details-area">
        <div className="container">
            <div className="product-details">

              <div className="product-details-top">
              <div className="product-details-image">
                    <img src={matchedMenproduct?.image} alt="" />
                </div>
                <div className="product-details-order">
                <div className="product-details-content">
                    <h3>{matchedMenproduct?.title}</h3>
                    <p>Price: ${matchedMenproduct?.price}</p>
                    <h5>{matchedMenproduct?.short_description}</h5>


                </div>

                <div className="order-form">
                  <h3>Order Now</h3>
                  <div className="order">
                    <form onSubmit={handleOrderSubmit}>
                    <input
                  type="text"
                  name="name"
                  className="order-input"
                  onChange={handleOrder}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  className="order-input"
                  onChange={handleOrder}
                  placeholder="Your Login Email"
                />
                <input
                  type="number"
                  name="number"
                  className="order-input"
                  onChange={handleOrder}
                  placeholder="Your Phone Number"
                />
                <div className="submit-btn">
                <input type="submit" className="button" value="ADD CART" />
                </div>
                
                    </form>
                  </div>
                </div>

                </div>
               
              </div>

              <div className="product-details-bottom">
                   {/* <p>{matchedMenproduct?.description}</p> */}
                   <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
        <p>{matchedMenproduct?.description}</p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
<br />
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="1">
        <Accordion.Header>Review</Accordion.Header>
        <Accordion.Body>
        {reviewPost?.map(re => <h1 key={re}>{re.review}</h1>)}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
              </div>

              <div className="product-review">
              <h3 class="title">Product Review</h3>
              <form onSubmit={handleReviewSubmit}>
                <input
                  type="text"
                  name="name"
                  className="review-input"
                  onChange={handleReview}
                  placeholder="write your name"
                />
               

                <input
                  type="text"
                  name="rating"
                  className="review-input"
                  onChange={handleReview}
                  placeholder="rating"
                />
                 <input
                  type="text"
                  name="review"
                  className="review-desc"
                  onChange={handleReview}
                  placeholder="write your opinion"
                />
                <div className="review-submit">
                <input type="submit" value="Send" />
                </div>
                
                </form>
              </div>


            </div>
        </div>
    </div>
  )
}
