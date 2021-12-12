import React from 'react'
import {Link} from "react-router-dom"

const Signin = () => {
   return (
      <div className="authheader">
         <p className="occasionp">Mon espace&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Sign In</p>
         <hr />
         <div className="signin">
            <h1 className="signinheader">Sign in</h1>
            <form method="POST" action="#" className="signin">
               <input type="email" placeholder="Email" className="forminputs" /> 
               <input type="password" placeholder="Password" className="forminputs" minLength="4"/>
               <input type="submit" value="Sign in" className="signinsubmit" />
            </form>
            <Link to="/register" className="createanaccount">
            Create an account
            </Link>
         </div>
      </div>
   )
}

export default Signin
