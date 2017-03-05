import { combineReducers } from 'redux';
import flights from './flights';
import menu from './menu';

const rootReducer = combineReducers({
    flights,
    menu
});

export default rootReducer;
