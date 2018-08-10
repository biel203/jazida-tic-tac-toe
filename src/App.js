import React, { Component } from 'react';
import { Provider } from 'react-redux';
import InitialContainer from './modules/components';
import store from './store';
import './style'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

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
