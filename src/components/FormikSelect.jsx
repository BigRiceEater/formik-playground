import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

class FormikSelect extends Component {
  handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  };

  render() {
    return (
      <Formik
        initialValues={{ formikMySelect: 'b' }}
        onSubmit={this.handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field component='select' name='formikMySelect'>
              <option value='a'>Car</option>
              <option value='b'>Motorcycle</option>
              <option value='c'>Ship</option>
            </Field>
            <button type='submit' disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default FormikSelect;
