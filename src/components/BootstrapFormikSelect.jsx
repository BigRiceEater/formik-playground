import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import {
  Form as BootstrapForm,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from 'reactstrap';

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
                <Field type='text' name='yourname' />
              </FormGroup>
              <FormGroup>
                <Label>Enter name</Label>
                <Input type='text' name='yourname' />
              </FormGroup>
            </BootstrapForm>
          </Form>
        )}
      </Formik>
    );
  }
}

export default BootstrapFormikSelect;
