import {
    SET_PROFILE,
    CLEAR_PROFILE,
    SET_OTHER_PROFILE,
    FETCHING_PROFILE,
    SET_SERVICES
} from '../types'
export default (state, action) => {
    switch(action.type){
        case SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                profileComplete: true
            }
        case FETCHING_PROFILE:
            return {
                ...state,
                fetchingProfile: true,
                otherProfile: null
            }
        case SET_OTHER_PROFILE:
            return {
                ...state,
                otherProfile: action.payload,
                fetchingProfile: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                profileComplete: null
            }
        case SET_SERVICES:
            return {
                ...state,
                services: action.payload
            }
        default:
            return state
    }
}