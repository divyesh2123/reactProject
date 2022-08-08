import React from 'react'
import {Field, Form, Formik} from 'formik';

export default function EmployeeInfo() {


  return (
    <div>

        <Formik
            initialValues={{

                firstName : "",
                lastName : "",
                email : "",
                acce:tru

            }}



            onSubmit={ (values) => {
                
                 console.log(values);

                 
              }}


            
        
        >
            <Form>

                <label>FirstName</label>
                <Field id="firstName" name="firstName"  type="text"></Field>

                <label>lastName</label>
                <Field id="lastName" name="lastName"  type="text"></Field>


                <label>email</label>
                <Field id="email" name="email"  type="email"></Field>

                <button type="submit">Submit</button>
            </Form>


        </Formik>

    </div>
  )
}
