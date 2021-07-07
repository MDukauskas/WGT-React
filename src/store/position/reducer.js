const initialState = {
    list: [],
    loading: false
}

export const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSITIONS':
            return {
                ...state,
                list: action.positions
            }
        case 'SET_POSITIONS_LOADING':
            return {
                ...state,
                loading: action.isLoading
            }
        default: return state
    }
}
