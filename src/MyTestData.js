import React from 'react'

export default function MyTestData(props) {
  return (
    <div>{props.myTest}</div>
  )
}

MyTestData.defaultProps = {

    myTest: "1"

}