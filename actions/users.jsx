import * as types from '../constants/ActionTypes';

export function showUserModal(user) {
    return {type: types.SHOW_USER_MODAL, user}
}

export function hideUserModal() {
    return {type: types.HIDE_USER_MODAL}
}

export function addUser(user) {
    return {type: types.ADD_USER, user}
}

export function updateUser(user) {
    return {type: types.UPDATE_USER, user}
}

export function deleteUser(userId) {
    return {type: types.DELETE_USER, userId}
}

export function getUsers() {
    let users = [];
    return {type: types.GET_USERS, users}
}
