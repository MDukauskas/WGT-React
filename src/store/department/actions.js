import { makeRequest } from '../../Services'

export const setDepartments = departments => ({
    type: 'SET_DEPARTMENTS',
    departments
})

export const setDepartmentsLoading = (isLoading = true) => {
    return {
        type: 'SET_DEPARTMENTS_LOADING',
        isLoading
    }
}

export const fetchDepartments = () => {
    return (dispatch) => {
        dispatch(setDepartmentsLoading())
        makeRequest('/department')
            .then(data => {
                dispatch(setDepartments(data))
                dispatch(setDepartmentsLoading(false))
            })
    }
}
