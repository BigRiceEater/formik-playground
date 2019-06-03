import React, { Component } from 'react';
import { Formik } from 'formik';

class BasicSelect extends Component {
  handleSubmit = values => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <Formik initialValues={{ myselect: 2 }} onSubmit={this.handleSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor='myselect'>Select</label>
              <select
                id='myselect'
                name='myselect'
                value={values.myselect}
                onChange={handleChange}
              >
                <option value='1'>Hello</option>
                <option value='2'>Byte</option>
              </select>
              <button>Submit</button>
            </form>
          );
        }}
      </Formik>
    );
  }
}

export default BasicSelect;
