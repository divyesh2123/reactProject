import {Field, Form, Formik,ErrorMessage} from 'formik';
import React from 'react'


export default function FormWithValidation() {


  const  validateEmployee = (data)=> {

        console.log(data)

        const errors = {};

        if(!data.firstName)
        {
            errors.firstName = 'Please Enter Name'

        }


        return errors;

    }

    const submitHandle = (data)=> {

        console.log(data);
    }





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

            validate= {
                validateEmployee }



                

            onSubmit={ (values) => {
                
                 console.log(values);

                 
              }}


            
        
        >
            <Form>

                <label>FirstName</label>
                <Field id="firstName" name="firstName"  type="text"></Field>
                <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-danger"
                    />

                <label>lastName</label>
                <Field id="lastName" name="lastName"  type="text"></Field>

                <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-danger"
                    />

                <label>email</label>
                <Field id="email" name="email"  type="email"></Field>

                
                <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />


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
