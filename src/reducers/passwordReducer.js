import {
    LOGIN_PASSWORD
} from '../actions/types'

const PasswordReducer =  (state = {}, action) => {
    switch (action.type) {
        case LOGIN_PASSWORD:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default PasswordReducer

        
