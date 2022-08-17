import React, { useContext } from 'react'
import LanguageContext from './context/LanguageContext'

export default function Mylevel4() {

  const {lan}=  useContext(LanguageContext);
  return (
    <div>{lan}</div>
  )
}
