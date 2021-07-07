import { combineReducers } from "redux";
import { userReducer } from './user'
import { departmentReducer } from './department'
import { positionReducer } from './position'

export const rootReducer = combineReducers({
    'users': userReducer,
    'departments': departmentReducer,
    'positions': positionReducer
})