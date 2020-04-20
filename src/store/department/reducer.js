const initialState = {
    list: [],
}

export const departmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DEPARTMENT':
            return {
                ...state,
                list: action.departmens
            }
        default: return state
    }
}
