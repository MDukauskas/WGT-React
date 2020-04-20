const initialState = {
    list: [],
}

export const positionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSITIONS':
            return {
                ...state,
                list: action.positions
            }
        default: return state
    }
}
