import React, { useState, useEffect } from 'react';
import useAuth from '../../Hooks/useAuth';
import './Nav.css'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";


export default function Header() {
    const { user, logOut } = useAuth();
    const [navbar, setNavbar] = useState(false)
    return (
        <div className='header-area'>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <h4>Colothee</h4>
                    </div>
                    <div className="nav-menu">
                        <ul>
                            <li className='demo'><Link to={"/"}>Home</Link></li>
                            {/* <li>About</li> */}
                            <li> Shop
                                <ul>
                                    <li className='demo'><Link to={"/menproduct"}>Men</Link></li>
                                    <li className='demo'><Link to={"/womenproduct"}>Women</Link></li>
                                    <li className='demo'><Link to={"/product"}>Accesories</Link></li>
                                </ul>
                            </li>
                            <li className='demo'><Link to={"/product"}>Products</Link></li>
                            <li className='demo'><Link to={"/contact"}>Contact</Link></li>
                            <li className='demo'><Link to={"/blog"}>Blog</Link></li>
                        </ul>
                    </div>
                     {/* <div className="input-field">
                         <input type="search" className='input' placeholder='search here' />
                         <button className='demo'><Link to={"/admin"}>Admin</Link></button>
                        <button className='demo'><Link to={"/login"}>Login</Link></button> 

                    </div>  */}
                    <div className='d-flex  align-items-center main-btn'>
            {user && <h6 className='text-danger fw-semi-bold text-dark me-3 p-0 name d-lg-block d-md-none d-none'>{user?.displayName}</h6>}
            {user?.email && <Link to={"/admin"}><button className='btn-danger bg-dark text-light rounded px-4 py-1 mx-2 outline-0 fw-bold '>Dashboard</button></Link>}
            {user?.email ? <button onClick={logOut} className='btn-danger px-4 py-1 rounded logout bg-dark text-light fw-bold'><Link to={"/"} className="text-decoration-none text-light ">Logout</Link></button>
              : <button className='btn-danger bg-dark text-light px-4 py-1 rounded fw-bold'> <Link to={"/login"} className="text-decoration-none  text-light ">Login</Link></button>}
          </div>
                </div>
            </div>
        </div>
    )
}
