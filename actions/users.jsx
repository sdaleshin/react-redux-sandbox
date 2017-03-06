import * as types from '../constants/ActionTypes';

export function showUserModal() {
    return { type: types.SHOW_USER_MODAL }
}

export function hideUserModal(carrier){
  return { type: types.HIDE_USER_MODAL }
}

