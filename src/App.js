import React from 'react';
import './App.css';

import './components/BasicInput';
import BasicInput from './components/BasicInput';
import BasicSelect from './components/BasicSelect';
import FormikSelect from './components/FormikSelect';
import BootstrapFormikSelect from './components/BootstrapFormikSelect';
import BootstrapSelect from './components/BootstrapSelect';

import { Card, CardBody, CardDeck } from 'reactstrap';
class App extends React.Component {
  state = {
    demoes: [
      { label: 'Raw Formik', comps: [<BasicInput />, <BasicSelect />] },
      { label: 'Formik Helpers', comps: [<FormikSelect />] },
      {
        label: 'Bootstrapped',
        comps: [<BootstrapFormikSelect />, <BootstrapSelect />]
      }
    ]
  };

  render() {
    const { demoes } = this.state;
    return (
      <div className='App'>
        {demoes.map(({ label, comps }) => (
          <div className='demo-wrapper'>
            <h3>{label}</h3>
            <CardDeck>
              {comps.map(c => (
                <Card>
                  <CardBody>{c}</CardBody>
                </Card>
              ))}
            </CardDeck>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
