import React, {useState, useEffect } from "react";
import fetch from "node-fetch";

const url = "http://localhost:3000/api/users"

export default function ListaUsuarios () {
  const [users, setUsers] = useState([]);
   useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((registrado)=>  mostrarNombre(registrado));

      const mostrarNombre = (registrado) =>{
          console.log(registrado)
          let  body= ""
          for (let i = 0; i<registrado.lenght; i++){
            body += <tr> ${registrado[i].users}</tr>
          document.getElementById("registrado").innerHTML = body}}
    }, []);
    
    }