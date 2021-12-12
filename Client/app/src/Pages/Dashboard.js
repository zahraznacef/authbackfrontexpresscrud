import React from 'react'
import {useState,useEffect} from "react"
import axios from "axios"



const Dashboard = () => {

   const [cards, setCards] = useState([])

   const getcards = () =>{
         axios.get("http://localhost:4000/app/cards/getallcards").then( res =>{
            setCards(res.data)
         })
   }

   const deletecards = (id) =>{
      axios.delete(`http://localhost:4000/app/cards/deletecard/${id}`).then( res =>{
         console.log(res.data)
      })
   }

   useEffect(() => {
      getcards();
   }, [])

   const del = (id) =>{
      window.location.reload(deletecards(id))
   }

   return (
      <>
         <h1>Dashboard</h1>
         <>
            {cards.map( el => (
               <>
                  <h1>{el.title}</h1>
                  <img src={el.image} alt=""/>
                  <h1>{el.price}</h1>
                  <h1>{el.description}</h1>
                  <button onClick={()=>del(el._id)}>Delete</button>
               </>
            ))}
         </>
      </>
   )
}

export default Dashboard
