import { useEffect, useState } from 'react'


import './App.css'
import axios from 'axios'
import List from './Components/List'



function App() {
  
  const [data,setData]=useState([])
  const [typeId,setTypeId]=useState("")

  useEffect(()=>{
    const locationRandom=Math.floor(Math.random()*126)+1
    axios.get(`https://rickandmortyapi.com/api/location/${locationRandom}`)
    .then(res=>setData(res.data))
  },[])

  const searchLocation=()=>{
    //*Siempre que se vaya a probar el onClick en un boton es importante primero poner un alert(typeId)
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
    .then(res=>setData(res.data))
  }
  

  console.log(data);

  return (
    <div className="App">

      <h1>Rick and Morty Search</h1>

      <div className='container-image'>
        <h1></h1>
     
      </div>

<input type="text" 
      placeholder='Search for Id'
      value={typeId}
      onChange={e =>setTypeId(e.target.value)}
    
      
      />
      <button onClick={searchLocation}>Search</button>

      <h2>{data.name}</h2>

      <div className='container'>
      
      <h3>Planet:{" "}{data.type}</h3>
      <h3>Dimension:{" "}{data.dimension} </h3>
      <h3>Population:{" "} {data.residents?.length} </h3>

      </div>
      
      

      <ul className='card'>
      {data.residents?.map(resident=>(
         
        <List key={resident} resident={resident}/>   
         
       
      ))}
      </ul>
     
     
    </div>
  )
}

export default App
