import React, { useContext } from 'react'
import LanguageContext from './context/LanguageContext'

export default function MyLevel3() {

    const {lan} = useContext(LanguageContext);

    const mylanguage ={

        en : {

            firstName : "First Name",
            lastName : "Last Name"

        },

        hn: {
            firstName : "पहला नाम",
            lastName : "उपनाम"

        }


    }
  return (
    <div>
        {mylanguage[lan]?.firstName}
        {mylanguage[lan]?.lastName}

    </div>
  )
}
