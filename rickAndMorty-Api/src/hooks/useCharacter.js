import { useState } from "react";
export function useCharacter() {
const [allCharacters, setAllCharacters] = useState([])



//haci se declara un hook
    const getAllCharacters = () => {

//el fetch es una peticion de servidor, que en este caso nos va a devolver datos
         return fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => setAllCharacters(data.results))//results y info de api
    
//donde guardaremos esos ^ datos?, hay que crear un estado,
//el estado de const [allCharacters, setAllCharacters] = useState([])
//los character se guardan en getAllCharacter
    }

    return{
        getAllCharacters,
        allCharacters,
    };



    
}