import React, { Component } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

class BootstrapSelect extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>How many cars</Label>
          <Input type='text' />
        </FormGroup>
      </Form>
    );
  }
}

export default BootstrapSelect;
