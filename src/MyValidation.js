import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


export default function MyValidation() {

    const validationSchema = ()=> {

        return Yup.object().shape({
            fullname : Yup.string().required('Fullname is required'),
            username: Yup.string()
            .required('Username is required')
            .min(6, 'Username must be at least 6 characters')
            .max(20, 'Username must not exceed 20 characters'),

            email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
            
          password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
            .max(40, 'Password must not exceed 40 characters'),
          confirmPassword: Yup.string()
            .required('Confirm Password is required')
            .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
          acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),

        })
    }

    const initialValues = {

        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
        country : ""

    }

    const handleSubmit = (data)=> {

        console.log(data);
    }



  return (
    <div className="register-form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ resetForm }) => (
                <Form>
                  <div className="form-group">
                    <label>Full Name</label>
                    <Field name="fullname" type="text" className="form-control" />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="username"> Username </label>
                    <Field name="username" type="text" className="form-control" />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group form-check">
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-danger"
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="confirmPassword"> Country </label>
                    <Field
                      name="country"
                      component="select"
                      className="form-control"
                    >
                         <option value="NY">New York</option>
             <option value="SF">San Francisco</option>
             <option value="CH">Chicago</option>
             <option value="OTHER">Other</option>

                        </Field>
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>



    
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn btn-warning float-right"
                    >
                      Reset
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
  )
}
