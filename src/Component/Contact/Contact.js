import axios from "axios";
import React, { useState } from "react";
import './Contact.css'

export default function Contact() {
    const [contact, setContact] = useState({
        name :"",
        email: "",
        message: ""
      });
      const handleContact = (e) => {
        setContact({
          ...contact,
          [e.target.name]: e.target.value
        });
      }
      const handleContactSubmit = async(e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/contact', contact)
        .then(res=>{
          console.log(res);
          if(res.status === 200){
            alert('Message Send');
          }
        })
    }
  return (
    <div className='contact-area'>
        <div className="container">
           <div className="contact-container">
           <div className="contact">
                <h3>Contact Us</h3>
                <div className="contact-form">
                    <form onSubmit={handleContactSubmit}>
                        <input type="text" placeholder='Your name' name="name" className='input' onChange={handleContact} />
                        <input type="email" placeholder='Your email' name="email" className='input' onChange={handleContact} />
                        <input type="text" placeholder='Your text' name="message" className='input'  onChange={handleContact}/>
                        <input type="submit" value='Send' />

                    </form>
                </div>
            </div>
            <div className="contact-address">
                <h3>Need Help? <span>+8801785831062</span></h3>
                <h5>we are available 9.00 am - 7.00 pm</h5>
                <h4>Address: Lorem, ipsum dolor.</h4>
            </div>
           </div>
        </div>
    </div>
  )
  }
