import React from 'react';
import {useState} from 'react'
import { register } from "../Redux/registerAction";
import { useDispatch, useSelector} from "react-redux"
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'



const RegisterSection = () => {
    const auth = useSelector((state) => state.registerStore)
    
    const dispatch = useDispatch();
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");


    const signup = (e) => {
        e.preventDefault();

        const user = {
            fullname,
            email,
            phonenumber,
            password
        };
        dispatch(register(user));
    }

    if (auth.authenticate) {
        return <Redirect to={'/signin'} />;
    }

    return (
    <div className="authheader">
        <p className="occasionp">Mon espace&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Register</p>
        <hr />
        <div className="signin">
           <h1 className="signinheader">Register</h1>
           <form method="POST" className="signin" onSubmit={signup}>

            <input 
            type="text" 
            placeholder="Fullname" 
            className="forminputs" 
            minLength={4} 
            onChange={ (e) =>{
                setFullname(e.target.value);
            }}/>

            <input 
            type="email" 
            placeholder="Email" 
            className="forminputs" 
            onChange={ (e) =>{
                setEmail(e.target.value);
            }}/> 

            <input 
            type="tel" 
            placeholder="Phone Number" 
            className="forminputs" 
            onChange={ (e) =>{
                setPhonenumber(e.target.value)
            }}/>

            <input 
            type="password" 
            placeholder="Password" 
            className="forminputs" 
            minLength="4" 
            onChange={ (e) =>{
                setPassword(e.target.value)
            }}/>

            <input type="submit" value="Create account" className="signinsubmit" />
           </form>
           <Link to="/signin" className="createanaccount">
           Already has an account?
        </Link>
        </div>
    </div>
    )

}

export default RegisterSection;