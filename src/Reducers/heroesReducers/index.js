import { GET_HEROES_SUCCESS, GET_HEROES_FAILURE, GET_HEROES_REQUEST, DELETE_HERO_SUCCESS } from "../../Actions/heroesActions"

const initialState = {
    heroes: [],
    isFetching: false,
    error: false,
    lastDeletedHero: ''
}

const heroesReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_HEROES_SUCCESS:
            return {
                ...state,
                heroes: action.payload.response,
                isFetching: false,
                error: false
            }
        case GET_HEROES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case GET_HEROES_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case DELETE_HERO_SUCCESS:
            return {
                ...state,
                lastDeletedHero: action.payload.response
            }
        default: return state
    }
}

export default heroesReducer