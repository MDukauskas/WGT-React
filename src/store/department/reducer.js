const initialState = {
    list: [],
    loading: false
}

export const departmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DEPARTMENTS':
            return {
                ...state,
                list: action.departments
            }
        case 'SET_DEPARTMENTS_LOADING':
            return {
                ...state,
                loading: action.isLoading
            }
        default: return state
    }
}
