import React from 'react'
import './About2.css'
import { BsArrowRight } from "react-icons/bs";
import {
  Link,
} from "react-router-dom";

export default function About2() {
  return (
    <div className='about2-area'>
        <div className="container">
            <div className="about2">
                <div className="about2-content">
                        <h5>New Women Collection</h5>
                        <h3>Best Sweatshirts and <br />tracksuits for everyone!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in, impedit voluptatem, autem similique aperiam cupiditate asperiores odio illo quae exercitationem? Quos excepturi vel ut quae distinctio hic, ipsa quidem?</p>
                        <button className='demo'><Link to={"/womenproduct"}>Shop Now<BsArrowRight/></Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}
