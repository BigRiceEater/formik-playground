import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Form as BootstrapForm, FormGroup, Label, Button } from 'reactstrap';

class BootstrapFormikSelect extends Component {
  handleSubmit = values => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <Formik
        initialValues={{ yourname: 'John Doe' }}
        onSubmit={this.handleSubmit}
      >
        {() => (
          <Form>
            <BootstrapForm>
              <FormGroup>
                <Label>Enter name</Label>
                <Field type='text' name='yourname' className='form-control' />
              </FormGroup>
              <Button color='primary' size='sm'>
                Okay
              </Button>
            </BootstrapForm>
          </Form>
        )}
      </Formik>
    );
  }
}

export default BootstrapFormikSelect;
