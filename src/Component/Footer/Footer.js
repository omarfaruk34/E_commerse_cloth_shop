import React from 'react'
import './Footer.css'
import {
    Link,
} from "react-router-dom";

export default function Footer() {
    return (
        <div className='footer-area'>
            <div className="container">
                <div className="footer">
                    <div className="footer-content">
                        <h3>Cloothee</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam aspernatur ut totam, quod placeat possimus ipsum autem vel quidem explicabo laboriosam ad expedita odit quia? Possimus ex repellat enim maiores?</p>
                        <p>+8801785831062 <span>cse_1822020034@lu.ac.bd</span></p>
                    </div>
                    <div className="footer-information">
                        <h3>Information</h3>
                        <div className="information-menu">
                            <ul>
                                <li><Link to={"/about"}>About Us</Link></li>
                                <li>Privacy Policy</li>
                                <li>Return Policy</li>

                            </ul>
                        </div>
                    </div>
                    <div className="footer-information">
                        <h3>Account</h3>
                        <div className="information-menu">
                            <ul>
                                <li>Dashboard</li>
                                <li>My orders</li>
                                <li>My Wishlist</li>

                            </ul>
                        </div>
                    </div>
                    <div className="footer-information">
                        <h3>Categories</h3>
                        <div className="information-menu">
                            <ul>
                                <li><Link to={"/menproduct"}>Men</Link></li>
                                <li><Link to={"/womenproduct"}>Women</Link></li>
                                <li><Link to={"/product"}>Accesories</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
