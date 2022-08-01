import React from 'react'

export default function UserAddress(data) {

    console.log(data);
  return (
    <div>{data.address.city} {data.address.suite}</div>
  )
}
