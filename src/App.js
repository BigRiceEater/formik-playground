import React from 'react';
import './App.css';

import './components/BasicInput';
import BasicInput from './components/BasicInput';
import BasicSelect from './components/BasicSelect';
import FormikSelect from './components/FormikSelect';
import BootstrapFormikSelect from './components/BootstrapFormikSelect';
import BootstrapSelect from './components/BootstrapSelect';

import { Button } from 'reactstrap';
class App extends React.Component {
  state = {
    components: [
      <BasicInput />,
      <BasicSelect />,
      <FormikSelect />,
      <BootstrapFormikSelect />
    ]
  };

  render() {
    return (
      <div className='App'>
        {this.state.components.map((comp, idx) => (
          <div className='demo-wrapper' key={idx}>
            {comp}
          </div>
        ))}

        <BootstrapSelect />
        <Button color='danger'>Reactstrap works!</Button>
      </div>
    );
  }
}

export default App;
