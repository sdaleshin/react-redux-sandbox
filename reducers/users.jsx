import {
    SHOW_USER_MODAL,
    HIDE_USER_MODAL,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
    GET_USERS
} from '../constants/ActionTypes';
const initialState = {
    allUsers: [{
        id: 1,
        fullName: 'Maria Sankina',
        birthdate: '02.02.1990',
        address: '1-13 St Giles High St',
        city: 'London',
        phone: '+79151238574'
    }],
    open: false
};

const userInitialState = {
    fullName: '',
    birthdate: '',
    address: '',
    city: '',
    phone: ''
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case SHOW_USER_MODAL:
            return Object.assign({}, state, {
                open: true,
                user: action.user || Object.assign({}, userInitialState)
            });
        case HIDE_USER_MODAL:
            return Object.assign({}, state, {
                open: false,
                user: null
            });
        case UPDATE_USER:
            return Object.assign({}, state, {
                allUsers: [...state.allUsers.filter((u) => u.id !== action.user.id), action.user].sort((a, b) => a.id - b.id)
            });
        case ADD_USER:
            let last = state.allUsers[state.allUsers.length - 1] || {id: 0};
            action.user.id = last.id + 1;
            return Object.assign({}, state, {
                allUsers: [...state.allUsers, action.user]
            });
        case DELETE_USER:
            return Object.assign({}, state, {
                allUsers: [...state.allUsers.filter((u) => u.id !== action.userId)]
            });
        case GET_USERS:
            return state;
        default:
            return state;
    }
}
