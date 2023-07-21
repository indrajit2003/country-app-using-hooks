import React from 'react'
import Country from './Country'
import style from "./countries.module.css"

import {v4 as uuidv4} from "uuid"

function countries(props) {
  return (
    <section className={style.countries}>
        {props.countries.map((country)=>{
            const newCountry = {country , id:uuidv4()}
            return <Country {...newCountry} key={newCountry.id} onRemoveCountry={props.onRemoveCountry}/>
        })}
    </section>
  )
}

export default countries