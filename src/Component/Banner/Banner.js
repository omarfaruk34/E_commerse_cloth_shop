import React from 'react'
import './Banner.css'
import { BsArrowRight } from "react-icons/bs";
import {
    Link,
} from "react-router-dom";

export default function () {
    return (
        <div className="banner-area">
            <div className="container">
                <div className="banner">
                <div className="banner content">
                    <h6>Summer 2022 Collection</h6>
                    <h2>Valentine Paul <br /> Essential Collection</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <h6 className='demo'><Link to={"/product"}>shop collection <span><BsArrowRight/></span></Link></h6>
                </div>
                </div>

            </div>
        </div>
    )
}
