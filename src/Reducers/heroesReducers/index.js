import {handleActions} from 'redux-actions';

const initialState = {
    heroes: [],
    isFetching: false,
    error: false,
    lastDeletedHero: ''
}

const heroesReducer = handleActions({
    GET_HEROES_REQUEST: (state, action) => ({
        ...state,
        isFetching: true,
        error: false
    }),
    GET_HEROES_SUCCESS: (state, action) => ({
        ...state,
        heroes: action.payload.response,
        isFetching: false,
        error: false
    }),
    GET_HEROES_FAILURE: (state, action) => ({
        ...state,
        isFetching: false,
        error: true
    }),
    DELETE_HERO_REQUEST: (state, action) => ({
        ...state,
        isFetching: true,
        error: false
    }),
    DELETE_HERO_SUCCESS: (state, action) => ({
        ...state,
        heroes: state.heroes.filter(hero => hero.id !== action.payload.response),
        lastDeletedHero: action.payload.response,
        isFetching: false,
        error: false,
    }),
    DELETE_HERO_FAILURE: (state, action) => ({
        ...state,
        isFetching: false,
        error: true
    }),
}, initialState);

export default heroesReducer