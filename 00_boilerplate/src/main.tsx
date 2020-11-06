import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {NumberSetterContainer, NumberViewContainer} from './components';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <>
        <NumberSetterContainer />
        <NumberViewContainer />

    </>
  </Provider>,
  document.getElementById('root')
);
