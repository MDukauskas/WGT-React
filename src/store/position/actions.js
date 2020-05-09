import { makeRequest } from '../../Services'


export const setPositions = positions => ({
    type: 'SET_POSITIONS',
    positions
})

export const setPositionsLoading = (isLoading = true) => {
    return {
        type: 'SET_POSITIONS_LOADING',
        isLoading
    }
}

export const fetchPositions = () => {
    return (dispatch) => {
        dispatch(setPositionsLoading())
        makeRequest('/position')
            .then(data => {
                dispatch(setPositions(data))
                dispatch(setPositionsLoading(false))
            })
    }
}
