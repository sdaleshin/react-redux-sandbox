import { combineReducers } from 'redux';
import flights from './flights';
import menu from './menu';
import users from './users';

const rootReducer = combineReducers({
    flights,
    menu,
    users
});

export default rootReducer;
