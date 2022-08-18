import React from 'react'
import Field from './Field';


export default function FieldGroup({ field, fieldChanged, values }) {
  return (
    <fieldset key={field._uid}>
    <h3>{field.label}</h3>
    {field.fields.map((field) => {
      return (
        <Field
          key={field._uid}
          field={field}
          fieldChanged={fieldChanged}
          value={values[field._uid]}
        />
      );
    })}
  </fieldset>
  )
}
