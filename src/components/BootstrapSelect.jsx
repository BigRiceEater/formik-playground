import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Select } from 'reactstrap';

class BootstrapSelect extends Component {
  render() {
    return (
      <Form inline>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label className='mr-sm-2'>How many cars</Label>
          <Input type='select' className='w-64'>
            <option value='num_1'>1</option>
            <option value='num_2'>2</option>
            <option value='num_3'>3</option>
          </Input>
        </FormGroup>
      </Form>
    );
  }
}

export default BootstrapSelect;
