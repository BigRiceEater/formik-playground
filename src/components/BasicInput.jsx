import React, { Component } from 'react';
import { Formik } from 'formik';
class BasicInput extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (
      <Formik initialValues={{ myname: 'bob' }} onSubmit={this.handleSubmit}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type='text'
              name='myname' // this is required
              value={values.myname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button>Submit</button>
          </form>
        )}
      </Formik>
    );
  }
}

export default BasicInput;
