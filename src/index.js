import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import reducer from './store/reducer'

axios.defaults.baseURL = 'https://react-burgerbuilder-fcfac.firebaseio.com/'

const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
