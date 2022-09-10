import React from 'react';
// import "./Addproduct.css";

import { useForm } from 'react-hook-form';

export default function Addmenproduct() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/addmenProduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Men Product added");
                    reset();
                }
            })
    };
    return (
        <div className='row'>
            <div id="addProduct" className='addproduct '>
                <h2 className="">Please Add Men Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input
                            {...register("brand")}
                            placeholder="Brand Name"
                            className="text"
                        />
                    {/* </div> */}
                    {/* <div className="col-xl-12 mr-2 p-3"> */}
                        <input
                            {...register("categori")}
                            placeholder="Categori"
                            className="text"
                        />
                    {/* </div> */}
                    {/* <div className="col-xl-6 mr-2 p-3"> */}
                        <input
                            {...register("title")}
                            placeholder="Product Title"
                            className="text"
                        />
                    {/* </div> */}

                    {/* <div className="col-xl-6 mr-2 p-3"> */}
                        <input
                            {...register("price")}
                            placeholder="Price"
                            className="text"
                        />
                    {/* </div> */}
                    {/* <div className="col-xl-6 mr-2 p-3"> */}
                      
                    {/* </div> */}
                    {/* <div className="col-xl-12 mr-2 p-3"> */}
                        <textarea
                            {...register("short_description")}
                            placeholder="Short Description"
                            className="desc"
                        />
                    {/* </div> */}
                    {/* <div className="col-xl-12 mr-2 p-3"> */}
                        <textarea
                            {...register("description")}
                            placeholder="Description"
                            className="desc"
                        />
                    {/* </div> */}
                    <input
                            {...register("rating")}
                            placeholder="Overall Rating"
                            className="text"
                        />
                    {/* <div className="col-xl-12  mr-2 p-3"> */}
                        <input
                            {...register("image", { required: true })}
                            placeholder="Image Link"
                            className="text"
                        />
                    {/* </div> */}
                    {errors.exampleRequired && <span>This field is required</span>}




                    {/* <div className="col-xl-12 m-2"> */}
                        <input type="submit" className='button' value="Add" />
                    {/* </div> */}

                    {/* </div> */}

                    
                </form>
            </div>
        </div>
    )
}
