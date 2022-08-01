import React from 'react'

export default function MyImage({imageUrl,imagetitle,altText}) {


  return (
    <div>

        <img src={imageUrl} title={imagetitle}
            alt={altText} />

    </div>
  )
}
