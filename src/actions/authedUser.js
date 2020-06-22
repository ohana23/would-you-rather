export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const UN_AUTH_USER = 'UN_AUTH_USER';

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function unAuthenticateUser() {
    return {
        type: UN_AUTH_USER
    }
}