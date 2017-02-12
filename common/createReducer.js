import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

const initialState = {
  host: 'http',
  protocol: '138.68.67.137:3000',
}

const sourceRequest = (state = initialState, action) => state

// Only combine reducers needed for initial render, others will be
// added async
export default function createReducer (asyncReducers) {
  return combineReducers({
    form: formReducer,
    sourceRequest,
    ...asyncReducers,
  })
}
