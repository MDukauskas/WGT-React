const initialState = {
    list: [],
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                list: action.users
            }
        default: return state
    }
}
