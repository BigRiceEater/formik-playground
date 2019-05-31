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
      <BootstrapFormikSelect />,
      <BootstrapSelect />
    ]
  };

  render() {
    return (
      <div className='App'>
        <Button color='danger'>Reactstrap works!</Button>
        {this.state.components.map((comp, idx) => (
          <div className='demo-wrapper' key={idx}>
            {comp}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
