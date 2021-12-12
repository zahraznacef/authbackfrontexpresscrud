import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
   return (
      <>
         <nav className="nav">
            <li className="nonetype">
               <Link to="/">
                  <img src="https://www.automobile.tn/images/logo.png" className="automobiletn" alt="automobile"/>
               </Link>
            </li>

               <ul className="nav-ul">
                  <li className="nav-li">
                     <Link to="https://www.automobile.tn/fr/neuf" className="nav-a">Prix du neuf</Link> 
                  </li>

                  <li className="nav-li">
                     <Link to="/occasions" className="nav-a">Occasions</Link> 
                  </li>

                  <li className="nav-li">
                     <Link to="https://www.automobile.tn/fr/magazine" className="nav-a">Auto mag</Link> 
                  </li>

                  <li className="nav-li">
                     <Link to="https://www.automobile.tn/fr/guide" className="nav-a">Guide Pratique</Link> 
                  </li>

                  <li className="nav-li">
                     <Link to="/signin" className="nav-a">Mon espace</Link> 
                  </li>
               </ul>
         </nav>
      </>
   )
}

export default Nav
