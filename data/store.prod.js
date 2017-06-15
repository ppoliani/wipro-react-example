import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducer from './reducer';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  ReduxThunk
)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(reducer);
}
