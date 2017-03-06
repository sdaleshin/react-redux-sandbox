import { combineReducers } from 'redux';
import menu from './menu';
import users from './users';

const rootReducer = combineReducers({
    menu,
    users
});

export default rootReducer;
