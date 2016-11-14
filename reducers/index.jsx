import { combineReducers } from 'redux';
import todos from './todos';
import flights from './flights';

const rootReducer = combineReducers({
    todos,
    flights
});

export default rootReducer;
