import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './config/ReactotronConfig';

import Routes from './routes/routes';
import history from './services/history';

import { store, persistor } from './store';

import './global.css'



function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
    
  );
}

export default App;
