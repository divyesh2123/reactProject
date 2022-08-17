import React, { useContext, useState } from 'react'
import LanguageContext from './context/LanguageContext';
import MyLevel1 from './MyLevel1';

export default function Header() {

  const {lan,setlan} =  useContext(LanguageContext)

  const myChange = (e)=> {
    setlan(e.target.value)
  }
  return (
    <div>

            <select onChange={myChange}  value={lan}>

                <option value="en">English</option>
                <option value="hn">Hindi</option>
                <option>Gujrati</option>
                <option>French</option>

            </select>

            <MyLevel1 ></MyLevel1>

    </div>
  )
}
