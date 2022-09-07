import React from 'react'
import './Elemantor_Container.css'

export default function Elemantor_Container() {
    return (
        <div className='elemantor-area'>
            <div className="container">
                <div className="elemantor">
                    <div className="elemantor-women">
                        <div className="women-image">
                            {/* <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/banner-11.jpg" alt="" /> */}
                            <div className="women-product-content">
                                 <h3>Women</h3>
                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, ratione. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                 <div className="menu">
                                    <ul>
                                        <li><a href="">Blazers</a></li>
                                        <li><a href="">Jackets</a></li>
                                        <li><a href="">Jeans</a></li>
                                        <li><a href="">Dresses</a></li>

                                    </ul>
                                 </div>
                            </div>
                        </div>
                    </div>
                    <div className="elemantor-men">
                        <div className="men-product">
                            {/* <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/banner-12.jpg" alt="" /> */}
                            <div className="men-proudct-content">
                                  <h3>Men</h3>
                                  <div className="menu">
                                  <ul>
                                        <li><a href="">Blazers</a></li>
                                        <li><a href="">Jackets</a></li>
                                        <li><a href="">Jeans</a></li>
                                        <li><a href="">Shirts</a></li>

                                    </ul>
                                  </div>
                            </div>
                        </div>
                        <div className="accesories-product">
                            <div className="shoes">
                                {/* <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/banner-13.jpg" alt="" /> */}
                                <div className="shoes-content">
                                    <h3>Shoes</h3>
                                </div>
                            </div>
                            <div className="accesories">
                            {/* <img src="https://k4j3j2s7.rocketcdn.me/clotya/wp-content/uploads/2022/05/banner-14.jpg" alt="" /> */}
                            <div className="accesories-content">
                                  <h3>Accesories</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
