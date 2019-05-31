import React, { Component } from 'react';
import { Formik } from 'formik';
import {
  Form as BootstrapForm,
  FormGroup,
  Label,
  Button,
  Input
} from 'reactstrap';

class ReactstrapInput extends Component {
  handleSubmit = values => {
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <Formik
        initialValues={{ yourname: 'John Doe' }}
        onSubmit={this.handleSubmit}
      >
        {(values, handleSubmit, handleChange) => {
          return (
            <BootstrapForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Enter name</Label>
                <Input
                  type='text'
                  name='yourname'
                  value={values.yourname}
                  onChange={handleChange}
                />
              </FormGroup>
              <Button color='primary' size='sm'>
                Okay
              </Button>
            </BootstrapForm>
          );
        }}
      </Formik>
    );
  }
}

export default ReactstrapInput;
