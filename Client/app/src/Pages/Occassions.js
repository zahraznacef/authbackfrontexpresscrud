import React from 'react'
import PlusIcon from "../Svg/Plus.svg" 
import CalendarIcon from "../Svg/Calendar.svg"
import RoadIcon from "../Svg/Road.svg"
import LocationIcon from "../Svg/Location.svg"
import GasIcon from "../Svg/Gas.svg"
import CarSpeedIcon from "../Svg/CarSpeed.svg"
import axios from "axios"
import { useEffect, useState } from 'react'

const Occassions = () => {

   const [occasion, setOccasion] = useState([])

   const occasionCards = () =>{
      axios.get("http://localhost:4000/app/occasion/getalloccasions").then( res =>{
         setOccasion(res.data)
      })
   }

   useEffect(() => {
      occasionCards();
   }, [])

   return (
      <div className="occasioncars">
         <p className="occasionp">Occassions</p>
         <hr />
         <div className="occasion-container">
            <div className="occasion-filter">
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Marques / Modèles</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Mots clefs</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Prix</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Anné</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Kilomètrage</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Puissance Fiscale</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Carrosserie</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Energie</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Boîte</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Gouvernorat</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Type de vendeur</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Couleur</span>
               </li>
                  <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Equipements extérieurs</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Equipements intérieurs</span>
               </li>
               <li className="occasion-filter-li">
                  <img alt="" src={PlusIcon} />
                  <span className="occasion-filter-span">Equipements de Sécurité</span>
               </li>
            </div>

            <div className="occasion-cards">


               {occasion.map( el =>(
                  <div className="occasioncard">
                  <img alt="" src={el.img} className="occasionimg"/>
                  <div className="occasion-card-content">
                     <div className="occasion-card-header">
                        <h2 className="occasion-card-content-h2">{el.title}</h2>
                        <h2 className="occasion-card-content-price">{el.price} DT</h2>
                     </div>
                     <div className="occasion-description">
                        <p className="occasion-description-p">{el.description}</p>
                     </div>
                     <div className="occasion-info">
                        <ul className="occasion-info-ul">
                           <li className="occasion-info-li">
                              <div className="occasion-info-div">
                                 <img alt="" src={CalendarIcon} className="occasion-icon"/>
                                 <span className="occasion-info-year">Année</span>
                              </div>
                              <p className="occasion-info-year-content">{el.year}</p>
                           </li>

                           <li className="occasion-info-li">
                              <div className="occasion-info-div">
                                 <img alt="" src={RoadIcon} className="occasion-icon"/>
                                 <span className="occasion-info-year">KMS</span>
                              </div>
                              <p className="occasion-info-year-content">{el.km}</p>
                           </li>

                           <li className="occasion-info-li">
                              <div className="occasion-info-div">
                                 <img alt="" src={LocationIcon} className="occasion-icon"/>
                                 <span className="occasion-info-year">Localité</span>
                              </div>
                              <p className="occasion-info-year-content">{el.location}</p>
                           </li>

                           <li className="occasion-info-li">
                              <div className="occasion-info-div">
                                 <img alt="" src={GasIcon} className="occasion-icon"/>
                                 <span className="occasion-info-year">Energie</span>
                              </div>
                              <p className="occasion-info-year-content">{el.energy}</p>
                           </li>

                           <li className="occasion-info-li">
                              <div className="occasion-info-div">
                                 <img alt="" src={CarSpeedIcon} className="occasion-icon"/>
                                 <span className="occasion-info-year">Boîte Vitesse</span>
                              </div>
                              <p className="occasion-info-year-content">{el.handletype}</p>
                           </li>
                        </ul>
                     </div>
                  </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Occassions
