import React from 'react';
// import "./Addproduct.css";

import { useForm } from 'react-hook-form';

export default function Addblog() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/addBlog', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Blog Create");
                    reset();
                }
            })
    };
    return (
        <div className='row'>
            <div id="addBlog" className='addcar col-xl-12'>
                <h2 className="my-3 p-2 text-light">Write Blog Here</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                    <div className="col-xl-6 mr-2 p-3">
                    <input
                        {...register("title")}
                        placeholder="your title write here"
                        className="form-control"
                    />
                    </div>
                    <div className="col-xl-12 mr-2 p-3">
                    <textarea
                        {...register("short_desc")}
                        placeholder="Short Description write here"
                        className="form-control"
                    />
                    </div>
                    <div className="col-xl-6 mr-2 p-3">
                    <input
                        {...register("details_desc")}
                        placeholder="Details write here"
                        className="form-control"
                    />
                    </div>
                   
                   
                    <div className="col-xl-12  mr-2 p-3">
                    <input
                        {...register("image", { required: true })}
                        placeholder="Image Link"
                        className="form-control"
                    />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                   

                   
                    
                    <div className="col-xl-12 m-2">
                    <input type="submit" className='btn btn-danger' value="Add"  />
                         </div>
                    </div>

                    
                </form>
            </div>
        </div>
    )
}
