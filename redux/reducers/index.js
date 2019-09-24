import { combineReducers } from 'redux';
import auth from './auth';
import items from './ingAPI';

const rootReducer = combineReducers({
    auth,
    items,
});

export default rootReducer;