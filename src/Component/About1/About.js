import React from 'react'
import './About.css'
import { BsArrowRight } from "react-icons/bs";
import {
    Link,
} from "react-router-dom";

export default function About() {
  return (
    <div className='about-area'>
        <div className="container">
            <div className="about">
                <div className="about-left">
                    <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/image-01.jpg" alt="" />
                    <div className="about-left-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in, impedit voluptatem, autem similique aperiam cupiditate asperiores odio illo quae exercitationem? Quos excepturi vel ut quae distinctio hic, ipsa quidem?</p>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-right-content">
                        <h5>New Collection</h5>
                        <h3>Best Sweatshirts and <br />tracksuits for everyone!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in, impedit voluptatem, autem similique aperiam cupiditate asperiores odio illo quae exercitationem? Quos excepturi vel ut quae distinctio hic, ipsa quidem?</p>
                        <button><Link to={"/product"}>Shop Now<BsArrowRight/></Link></button>
                    </div>
                    <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/image-02.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
