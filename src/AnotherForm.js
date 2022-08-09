import React from 'react'
import { useFormik } from 'formik';

export default function AnotherForm() {

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          console.log(values);
        },
      });

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>

        <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>

        </form>

    </div>
  )
}
