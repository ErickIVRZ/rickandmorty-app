import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './style.css'



const List = ({resident}) => {

  const [character,setCharacter]=useState({})

  useEffect(()=>{
    axios.get(resident)
    .then(res=>setCharacter(res.data))
  },[])

  console.log(character);


  return (



   <li className='character-card'>
    <h2>Name:{character?.name}</h2>
    <h3>Status:{character.status}-{character.species}</h3>
    <h3>Origin:{character.origin?.name}</h3>
    <h3>Episodes where appear:{character.episode?.length}</h3>
        
    
    <br />
    <img src={character.image} alt="" />
    </li>
    
  );
};

export default List;