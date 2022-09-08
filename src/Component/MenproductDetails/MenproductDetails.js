// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Menproductdetails.css";

export default function MenproductDetails() {
 

    const [menproducts, setmenProducts] = useState([]);
    const [matchedMenproduct, setMatchedMenproduct] = useState([]);
    const { menproductId } = useParams();
    useEffect(() => {
      fetch(`http://localhost:5000/addmenProduct/`)
        .then((res) => res.json())
        .then((data) => setMatchedMenproduct(data.find((menproducts) => menproducts._id === menproductId)));
    }, [menproductId, setMatchedMenproduct]);


  return (
    <div className="product-details-area">
        <div className="container">
            <div className="product-details">

              <div className="product-details-top">
              <div className="product-details-image">
                    <img src={matchedMenproduct?.image} alt="" />
                </div>
                <div className="product-details-content">
                    <h3>{matchedMenproduct?.title}</h3>
                    <p>Price: ${matchedMenproduct?.price}</p>
                    <h5>{matchedMenproduct?.short_description}</h5>


                </div>
              </div>

              <div className="product-details-bottom">
                   <p>{matchedMenproduct?.description}</p>
              </div>


            </div>
        </div>
    </div>
  )
}
