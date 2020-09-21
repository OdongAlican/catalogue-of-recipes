import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  )

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
