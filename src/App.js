import React, { Component } from 'react';
import { Provider } from 'react-redux'
import InitialContainer from './modules/components'
import store from './store'
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <InitialContainer />
        </Provider>
    );
  }
}

export default App;
