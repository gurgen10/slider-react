import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import reducer from './reducer';

const logger = createLogger({
  duration: true,
  collapsed: true
});

const preloadedState = JSON.parse(localStorage.getItem('gallery'));
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;
const enhancedStore = composeEnhancers(applyMiddleware(logger));

const store = preloadedState
  ? createStore(reducer, preloadedState, enhancedStore)
  : createStore(reducer, enhancedStore);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('gallery', JSON.stringify(state));
});

export default store;