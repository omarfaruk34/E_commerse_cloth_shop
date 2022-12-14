
import React, { useState } from 'react';
import "./Admin.css";
// import { MdPayment } from "react-icons/md";
// import { MdOutlineDashboard } from "react-icons/md";
// import { MdReviews } from "react-icons/md";
// import { FaFirstOrderAlt } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { AiOutlineFolderView } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";

import { Link } from 'react-router-dom';
// import Orders from '../Orders/Orders';
// import Payment from '../Payment/Payment';
// import ReviewPost from '../ReviewPost/ReviewPost';
// import Dashboard from '../Dashboard/Dashboard';
// import AddCar from '../AddCar/AddCar';
import Message from '../Message/Message';
// import Manageorders from '../Manage-order/Manage-order';
import Addproduct from '../Addproduct/Addproduct';
import Addmenproduct from '../Addmenproduct/Addmenproduct';
import Addwomenproduct from '../Addwomen/Addwomenproduct';


import useAuth from "../../Hooks/useAuth";
import Orders from '../Orders/Orders';



export default function Admin() {
    const { admin } = useAuth();
    const [activeTab, setActiveTab] = useState("addProduct");
    // console.log(activeTab)
    return (
        <div className='admin-dashboard'>
            <div className='sidebar'>
                <div className='side-nav' >

                    <ul className="text-light list-unstyled">

                        {admin && (
                            <li onClick={() => setActiveTab("addProduct")}><span><AiFillFileAdd /></span>Add Product</li>
                        )}
                        {admin && (
                            <li onClick={() => setActiveTab("addmenProduct")}><span><AiOutlineFolderView /></span>Add Men Product</li>
                        )}
                        {admin && (
                            <li onClick={() => setActiveTab("addwomenProduct")}><span><AiOutlineFolderView /></span>Add Women Product</li>
                        )}
                        {admin && (
                            <li onClick={() => setActiveTab("message")}><span><AiFillMessage /></span>View all message</li>
                        )}
                        {admin && (
                            <li onClick={() => setActiveTab("manageOrders")}><span><AiFillMessage /></span>Manage Orders</li>
                        )}

                        <li onClick={() => setActiveTab("order")}>
                            <span>
                            <AiFillMessage />
                            </span>
                            Order
                        </li>
                    </ul>
                </div>
                <div className='side-content'>

                    {
                        activeTab === "addProduct" && <Addproduct />
                    }
                    {
                        activeTab === "addmenProduct" && <Addmenproduct />
                    }
                    {
                        activeTab === "addwomenProduct" && <Addwomenproduct />
                    }
                    {
                        activeTab === "message" && <Message />
                    }
                     {
                        activeTab === "manageOrders" && <Orders/>
                    }
                     {
                        activeTab === "order" && <Orders/>
                    }


                </div>
            </div>

        </div>
    )
}


