import React from 'react';
import './App.css';

import './components/BasicInput';
import BasicInput from './components/BasicInput';
import BasicSelect from './components/BasicSelect';
import InputArray from './components/InputArray';
import FormikSelect from './components/FormikSelect';
import ReactstrapFormikSelect from './components/ReactstrapInput';

import { Card, CardBody, CardDeck } from 'reactstrap';
class App extends React.Component {
  state = {
    demoes: [
      {
        label: 'Raw Formik',
        comps: [<BasicInput />, <BasicSelect />, <InputArray />]
      },
      { label: 'Formik Helpers', comps: [<FormikSelect />] },
      {
        label: 'Reactstrapped Formik',
        comps: [<ReactstrapFormikSelect />]
      }
    ]
  };

  render() {
    const { demoes } = this.state;
    return (
      <div className='App'>
        {demoes.map(({ label, comps }) => (
          <div className='demo-wrapper' key={label}>
            <h3>{label}</h3>
            <CardDeck>
              {comps.map((c, idx) => (
                <Card key={idx}>
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
