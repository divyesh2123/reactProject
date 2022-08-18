import React from 'react'

export default function Field({ field, fieldChanged, type, value }) {

    console.log(field,type,value);
  return (
   

<div key={field._uid}>
      <label htmlFor={field._uid}>{field.label}</label>
      <input
        type={type || field.component}
        id={field._uid}
        name={field._uid}
        value={value}
        onChange={(e) => {
          // Notify the main state list of the new value
          fieldChanged(field._uid, e.target.value);
        }}
      />
   


    </div>
  )
}
