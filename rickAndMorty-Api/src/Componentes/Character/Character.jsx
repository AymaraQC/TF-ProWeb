import { useEffect, useState } from "react";
import { useCharacter } from "../../hooks/useCharacter";
import "./character.css";

export function Character() {
const {getAllCharacters,
    allCharacters} =useCharacter();
//a conticuacion vamoa a hacer la destructuracion: recuperar los datos que necesitamos de algun lado 

// useEffect y useState Hooks
useEffect(() => {
getAllCharacters()
}, []);
//useEffect recibe una funcion callback, es decir el codigo a ejecutar
// recibe cuando se va a ejecutar


return (
<ul>
{allCharacters.map((item, index) => (
<li key={index}>
<h3>{item.name}</h3>
<p>{item.status}</p>
<img src={item.image} alt="" />
<p>{item.species}</p>
<h4> Last Know Location:</h4>
<p>{item.location["name"]}</p>
</li>
))}
</ul>
);
}








/*
import { useEffect, useState } from "react";

export function Character(){
const [ character, setCharacter ] = useState([]);



    //kooks useeFfect(RESIVE DOS PARAMETROS) y useState
    //el useEffect se ejecurta una vez
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => console.log(data));
    },[])
//useEffect recibe una funcion callback, es decir el codigo e ejetutarse
//recibe cuando se va a ejecutar (todos los datos que van a cambiar en tiempo)

    return(

        <>character</>
    );
}

*/



//useState guarda los datos del anterior

