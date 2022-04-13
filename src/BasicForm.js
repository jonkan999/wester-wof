import './BasicForm.css';
import {Formik, Field, Form } from 'formik';
import React from 'react';

export default class BasicForm extends React.Component {
  render() {
    return (
      <div style={{ padding: "2vh 5vw", textAlign: "center",fontSize: "2vh"}}>
        <h1>Fyll i formuläret och snurra lyckohjulet för chansen att vinna fina priser!</h1>
        <Formik
          initialValues={{
            business: '',
            email: ''
          }}
          onSubmit={async (values) => {
            /*callAPI(values.business,values.email)*/
            
            /*console.log(JSON.stringify(values, null, 2));*/
            this.props.newValues({
              business: values.business,
              email: values.email
            })
            console.log(values.business);
            
          }}
        >
          <Form>
          <h1/>
            <label htmlFor="business">Företagsnamn <br/> </label>
            <Field
            id="business"
            name="business"
            placeholder="Westers Catering"
            />
            <h1/>  
            <label htmlFor="email">Emailadress <br/> </label>
            <Field
            id="email"
            name="email"
            placeholder="example@gmail.com"
            />
            <h1/>
            <button className="submit-button" type="submit" onClick={() => { setTimeout(() => {this.props.startInd(true)}, 1000)}}>
              Snurra på hjulet!
            </button>
            
          </Form>
        </Formik>
      </div>
    );
    
  }
}