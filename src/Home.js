import React from 'react'
import Data from './Data'

export default function Home() {

    

  return (
    <div>
        {

            Data.map((element)=> {

                return(<>
                    {element.employeeID} {element.enmae}
                    <img src={element.image} />
               </>)
            })

        }


    </div>
  )
}
