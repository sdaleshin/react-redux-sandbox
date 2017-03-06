import {
    SHOW_USER_MODAL,
    HIDE_USER_MODAL
} from '../constants/ActionTypes';
const initialState = {
    allUsers: [{
        fullName: 'Maria Sankina',
        birthdate: '02.02.1990',
        address: '1-13 St Giles High St',
        city: 'London',
        phone: '+79151238574'
    }],
    open: false
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case SHOW_USER_MODAL:
            return Object.assign({}, state, {
                open: true
            });
        case HIDE_USER_MODAL:
            return Object.assign({}, state, {
                open: false
            });
        default:
            return state;
    }
}
