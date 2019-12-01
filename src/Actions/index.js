import {createActions} from 'redux-actions'

export const {
    getHeroesRequest,
    getHeroesSuccess,
    getHeroesFailure,
    deleteHeroRequest,
    deleteHeroSuccess,
    deleteHeroFailure
} = createActions({
    GET_HEROES_REQUEST: () => {
    },
    GET_HEROES_SUCCESS: response => ({response}),
    GET_HEROES_FAILURE: error => ({error}),
    DELETE_HERO_REQUEST: () => {
    },
    DELETE_HERO_SUCCESS: response => ({response}),
    DELETE_HERO_FAILURE: error => ({error}),
})