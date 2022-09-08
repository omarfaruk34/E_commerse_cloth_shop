import React from 'react'
import './Elemantor_Container.css'
import {
    Link,
} from "react-router-dom";

export default function Elemantor_Container() {
    return (
        <div className='elemantor-area'>
            <div className="container">
                <div className="elemantor">
                    <div className="elemantor-women">
                        <div className="women-image">
                            {/* <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/banner-11.jpg" alt="" /> */}
                            <div className="women-product-content">
                                 <h3><Link to={"/womenproduct"}>Women</Link></h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ratione. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                 <div className="menu">
                                    <ul>
                                        <li>Blazers</li>
                                        <li>Jackets</li>
                                        <li>Jeans</li>
                                        <li>Dresses</li>

                                    </ul>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div className="elemantor-men">
                        <div className="men-product">
                            {/* <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/banner-12.jpg" alt="" /> */}
                            <div className="men-proudct-content">
                                  <h3><Link to={"/menproduct"}>Men</Link></h3>
                                  <div className="menu">
                                  <ul>
                                        <li>Blazers</li>
                                        <li>Jackets</li>
                                        <li>Jeans</li>
                                        <li>Shirts</li>

                                    </ul>
                                  </div>
                            </div>
                        </div>
                        <div className="accesories-product">
                            <div className="shoes">
                                {/* <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/banner-13.jpg" alt="" /> */}
                                <div className="shoes-content">
                                    <h3><Link to={"/product"}>Shoes</Link></h3>
                                </div>
                            </div>
                            <div className="accesories">
                            {/* <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/banner-14.jpg" alt="" /> */}
                            <div className="accesories-content">
                                  <h3><Link to={"/product"}>Accesories</Link></h3>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
