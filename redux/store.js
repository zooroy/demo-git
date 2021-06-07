import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];
export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
