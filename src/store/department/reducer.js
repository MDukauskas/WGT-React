const initialState = {
    list: [],
}

export const departmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DEPARTMENTS':
            return {
                ...state,
                list: action.departments
            }
        default: return state
    }
}
