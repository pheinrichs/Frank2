import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index';
import * as game from './actions/game';
import App from './App';
import './index.css';

const store = createStore(
  reducer,
  {},
  applyMiddleware(thunk)
);

store.dispatch(game.play());

const onKeyPress = e => store.dispatch(game.press(e));
document.addEventListener(
  'keydown',
  onKeyPress,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
