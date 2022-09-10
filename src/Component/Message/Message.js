import React, { useEffect, useState } from 'react';
import "./Message.css";





export default function Message() {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/contact')
      .then(res => res.json())
      .then(data => setMessage(data));
  }, []);


  return (
    <div className='row'>
      <div className="col-xl-12">
        <div className="message-heading my-2">
          <h2 className='p-2'>Messages</h2>
        </div>
        {
          message.map(item =>
            <div className="messages" key={item?._id}>
                {/* <img src="https://i.ibb.co/wzwNwg9/images.jpg" alt="" /> */}
                <div className="message-content">
                  <h1>{item?.name}</h1>
                  <h2><span>Email: </span> {item?.email}</h2>
                </div>
              <div className="message-bottom shadow">
                <p> <span>Message:</span> {item?.message}</p>
                {/* <input type="submit" className='btn btn-danger' value="Reply" /> */}
              </div>
              </div>
          )
        }
      </div>
    </div>
  )
}
