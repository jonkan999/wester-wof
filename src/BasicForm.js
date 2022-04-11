import './BasicForm.css';
import { useFormik,Formik, Field, Form } from 'formik';
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default class BasicForm extends React.Component {
  render() {
    return (
      <div style={{ padding: "2vh 5vw", textAlign: "center",fontSize: "2vh"}}>
        <h1>Sign up to spin the wheel!</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            business: ''
          }}
          onSubmit={async (values) => {
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
          <h1/>
            <label htmlFor="firstName">First Name <br/> </label>
            <Field
            id="firstName"
            name="firstName"
            placeholder="First Name"
            />
            <h1/>  
            <label htmlFor="lastName">Last Name <br/> </label>
            <Field
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            />
            <h1/>
            <label htmlFor="email">Email <br/> </label>
            <Field
            id="email"
            name="email"
            placeholder="Email"
            />
            <h1/>
            <label htmlFor="business">Business Name <br/> </label>
            <Field
            id="business"
            name="business"
            placeholder="Business Name"
            />
            <h1/>
            <button className="submit-button" type="submit" onClick={() => { setTimeout(() => {this.props.startInd(false)}, 1000); this.props.setFormValues(this.initialValues) }}>
              Submit and proceed to spin
            </button>
            
          </Form>
        </Formik>
      </div>
    );
    
  }
}