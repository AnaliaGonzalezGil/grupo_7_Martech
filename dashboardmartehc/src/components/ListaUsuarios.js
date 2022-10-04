import React, {useState, useEffect } from "react";


function ListaUsuarios(){
    const url = "http://localhost:3000/api/users"
    const [usersTotales, setUsersTotales] = useState()
    const fetchApi = async() => {
      const response = await fetch(url)
      const responseJson = await response.json()
      setUsersTotales(responseJson)
    } 
    useEffect(()=>{
      fetchApi()
    },)
    return(
        <div>
        <ul>       
            {usersTotales.map((usuarios,index) =>{
                return(
                <li> {usuarios.firstName}</li>
            )})}
        </ul>
        </div>
)}

export default ListaUsuarios;