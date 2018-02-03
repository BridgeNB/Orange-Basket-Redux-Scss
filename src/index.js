import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';
import OrangeBasket from './components/OrangeBasket';

import "./index.css";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
  <OrangeBasket />
</Provider>, document.getElementById('root'));
registerServiceWorker();
