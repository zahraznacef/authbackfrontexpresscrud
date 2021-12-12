import React from 'react'
import {Link} from 'react-router-dom'
import FacebookIcon from '../Svg/Facebook.svg'
import YoutubeIcon from '../Svg/Youtube.svg'
import InstagramIcon from '../Svg/Instagram.svg'
import TwitterIcon from '../Svg/Twitter.svg'
import RSSIcon from '../Svg/RSS.svg'

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-content">
            
            <div className="footer-row">
               <ul className="footer-ul">
                  <li className="footer-li-header">
                     <Link to="/">
                        Prix du neuf
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Marques
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Concessionnaires
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Comparateur
                     </Link>
                  </li>
               </ul>

               <ul className="footer-ul">
                  <li className="footer-li-header">
                     <Link to="/">
                        Occasions
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Recherche
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Annonces du jour
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Vendeurs Pro
                     </Link>
                  </li>
               </ul>

               <ul className="footer-ul">
                  <li className="footer-li-header">
                     <Link to="/">
                        Auto Mag
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Nouveautés
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Actu
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Essais
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Concepts
                     </Link>
                  </li>
               </ul>
            </div>

            <div className="footer-row">
            <ul className="footer-ul">
                  <li className="footer-li-header">
                     <Link to="/">
                        Guide Pratique
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Droits de douanes
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        FCR
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Permis de conduire
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                     Visite Technique
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                     Vignette
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                     Voitures populaires
                     </Link>
                  </li>
               </ul>

               <ul className="footer-ul">
                  <li className="footer-li-header">
                     <Link to="/">
                        Mon espace
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Créer une annonce
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Annonces favorites
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Gérer mes alertes
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Inscription
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Gérer mes informations
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Mes annonces
                     </Link>
                  </li>
               </ul>

               <ul className="footer-ul">
                  <li className="footer-li-header">
                     <Link to="/">
                        Qui sommes-nous?
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Contactez-nous
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Mentions légales
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Politique de confidentialité
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Revue de Presse
                     </Link>
                  </li>

                  <li className="footer-li">
                     <Link to="/">
                        Concepts
                     </Link>
                  </li>
               </ul>
            </div>

         </div>

         <div className="socialmedia">
            <div className="footer-column">
               <p className="restezconnecte">Restez Connecté</p>
                  <ul className="socialmedia-ul">
                     <a href="https://www.facebook.com/automobile.tn">
                        <img className="footer-icons" src={FacebookIcon} alt="facebook" />
                     </a>
                     <a href="https://www.youtube.com/user/AutomobileTn">
                        <img className="footer-icons" src={YoutubeIcon} alt="youtube" />   
                     </a>
                     <a href="https://www.instagram.com/automobile.tn/">
                        <img className="footer-icons" src={InstagramIcon} alt="instagram" />
                     </a>
                     <a href="https://twitter.com/AutomobileTN" >
                        <img className="footer-icons" src={TwitterIcon} alt="twitter" />
                     </a>
                     <Link to="/Rss">
                        <img className="footer-icons" src={RSSIcon} alt="RSS" />
                     </Link>
                  </ul>
            </div>

            <div className="footer-column">
               <p className="restezconnecte">NewsLetter</p>
               <form method="POST" action="#">
                  <input className="newsletterinput" type="email" placeholder="Votre e-mail ici"/>
                  <input type="submit" value="Send" className="newslettersubmit"/>
               </form>
               <a href="https://notteacher.com/" className="powered">Powered by Nacef, notteacher.com</a>
            </div>
         </div>
      </footer>
   )
}

export default Footer
