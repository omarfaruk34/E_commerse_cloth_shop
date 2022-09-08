// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function WomenproductDetails() {
 

    const [womenproducts, setwomenProducts] = useState([]);
    const [matchedWomenproduct, setMatchedWomenproduct] = useState([]);
    const { womenproductId } = useParams();
    useEffect(() => {
      fetch(`http://localhost:5000/addwomenProduct/`)
        .then((res) => res.json())
        .then((data) => setMatchedWomenproduct(data.find((womenproducts) => womenproducts._id === womenproductId)));
    }, [womenproductId, setMatchedWomenproduct]);


  return (
    <div className="product-details-area">
        <div className="container">
            <div className="product-details">

              <div className="product-details-top">
              <div className="product-details-image">
                    <img src={matchedWomenproduct?.image} alt="" />
                </div>
                <div className="product-details-content">
                    <h3>{matchedWomenproduct?.title}</h3>
                    <p>Price: ${matchedWomenproduct?.price}</p>
                    <h5>{matchedWomenproduct?.short_description}</h5>


                </div>
              </div>

              <div className="product-details-bottom">
                   <p>{matchedWomenproduct?.description}</p>
              </div>


            </div>
        </div>
    </div>
  )
}
