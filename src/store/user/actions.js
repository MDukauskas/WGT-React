import { makeRequest } from '../../Services'

export const setUsers = users => ({
    type: 'SET_USERS',
    users
})

export const setUsersLoading = (isLoading = true) => {
    return {
        type: 'SET_USERS_LOADING',
        isLoading
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(setUsersLoading())
        makeRequest('/user')
            .then(data => {
                dispatch(setUsers(data))
                dispatch(setUsersLoading(false))
            })
    }
}