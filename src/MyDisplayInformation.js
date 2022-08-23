import React, { useState } from 'react'

export default function MyDisplayInformation({text}) {

   
    const [showmore,setShowmore] = useState(false);


    const myClick = ()=> {

        setShowmore(!showmore);
    }

    const truncateText = React.useMemo(() => {
        console.log("this is the calculatingthis is the calculatingthis is the calculatingthis is the calculatingthis is the calculatingthis is the calculatingthis is the calculating");
      return text.slice(0, 30).concat('...');
    },[text]);

   

  return (
    <div>
        <p onClick={myClick}>
        {truncateText}
        {showmore ? 'less' : 'more'}
        </p>

    </div>
  )
}
