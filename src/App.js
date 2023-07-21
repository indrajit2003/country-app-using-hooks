import React, { useEffect, useState } from 'react'
import "./App.css"
import Countries from "./components/countries"


function App() {
const url = "https://restcountries.com/v3.1/all"

  const [isLoading , setIsLoading] = useState(true);
  const [error , setError] = useState(null);
  const [countries , setCountries] = useState([]);

    
  const handleRemoveCountry = (name) =>{
    const filter = countries.filter((country)=> country.name.common !== name)
    setCountries(filter)
  }


  useEffect(()=>{
    fetch(url)
    .then((res)=>{
     if(!res.ok){
       throw Error("your Data fetch was not successfully")
     } else {
       return res.json()
     }
    })
    .then((data)=>{
     setCountries(data)
     setIsLoading(false)
     setError(null)
    })
    .catch((error)=>{
     setIsLoading(false)
     setError(error)
    })
  },[])

  return (
    <div>
      <h1>Country App</h1>
      {countries && <Countries countries={countries} onRemoveCountry={handleRemoveCountry}/>}
      {isLoading && <h2>Loading...</h2>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default App