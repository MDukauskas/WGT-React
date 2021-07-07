const initialState = {
    list: [],
    loading: false
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                list: action.users
            }
        case 'SET_USERS_LOADING':
            return {
                ...state,
                loading: action.isLoading
            }
        default: return state
    }
}
