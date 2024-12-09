import React, { useEffect, useState } from 'react'
import './FormSub.css'
import connection from '../database/connection'


const FormSub = () => {

    const db = connection();

    console.log(db);

    const saveData = (event) => {
        event.preventDefault();

        if (event.target[0].value === "" || event.target[1].value === "") {
            alert("Please enter your email and city");
            return;
        }

        let checkCity = event.target[1].value;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${checkCity}&cnt=7&appid=c4518dbbb5454289eacfb4c1b2962acb&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod === "404") {
                  alert(`City: "${city}" not found, please enter a valid city`);
                  return
                }
            });



        const email = event.target[0].value;
        const city = event.target[1].value;
        console.log(email, city);
/*         db.collection("users").add({
            email: email,
            city: city
        })
        .then(() => {
            alert("Datos guardados correctamente");
        })
        .catch((error) => {
            alert("Error al guardar los datos");
        }); */
    }

  return (
    <>
        <h3>¿Quieres recibir actualizaciones del clima?</h3>
        <p>Se enviarán a las 7:00 am hora chilena</p>
        <form onSubmit={saveData}>
            <input type="email" placeholder="Ingresa tu correo" required />
            <input type="text" placeholder="Ingresa tu ciudad" required />
            <button type="submit">Enviar</button>
        </form>
    </>
  )
}

export default FormSub