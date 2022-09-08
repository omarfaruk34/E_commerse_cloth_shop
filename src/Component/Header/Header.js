import React from 'react';
import './Nav.css'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

export default function Header() {
    return (
        <div className='header-area'>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <h4>Colothee</h4>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            {/* <li>About</li> */}
                            <li> Shop
                                <ul className='drop1'>
                                    <li><Link to={"/menproduct"}>Men</Link></li>
                                    <li><Link to={"/womenproduct"}>Women</Link></li>
                                    <li><Link to={"/product"}>Accesories</Link></li>
                                </ul>
                            </li>
                            <li><Link to={"/product"}>Products</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                            <li><Link to={"/blog"}>Blog</Link></li>
                        </ul>
                    </div>
                    <div className="input-field">
                        {/* <input type="search" className='input' placeholder='search here' /> */}
                        <button><Link to={"/"}>Admin</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
