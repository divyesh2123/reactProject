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
                checked: [],
                lang: []

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

           <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="radio" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div>


          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="lang" value="English" />
              English
            </label>
            <label>
              <Field type="checkbox" name="lang" value="Gujrati" />
              Gujrati
            </label>
            <label>
              <Field type="checkbox" name="lang" value="Hindi" />
              Hindi
            </label>
          </div>


               
                <button type="submit">Submit</button>
            </Form>


        </Formik>

    </div>
  )
}
