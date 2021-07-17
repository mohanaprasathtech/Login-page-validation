import React from 'react';
import { useState } from 'react';
import './Loginform.css';
function Loginform({ Login, error}) {
    const[details,setdetails]=useState({name:"",email:"",password:""});

    function handlesubmit(e) {
        e.preventDefault();

        Login(details);
    }
    return (
        <div>
            <form action="" onSubmit={handlesubmit}>
                <div className="in-form">
                    <h2>Login</h2>
                    {error != "" ? (<div className="err-msg">{error}</div>) : ""}
                    <div className="group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e=>{setdetails({...details, name:e.target.value})}}/>
                    </div>
                    <div className="group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" onChange={e=>{setdetails({...details, email:e.target.value})}}/>
                    </div>
                    <div className="group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={e=>{setdetails({...details, password:e.target.value})}}/>
                    </div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Loginform;
