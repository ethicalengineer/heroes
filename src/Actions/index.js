import { 
    GET_HEROES_REQUEST, 
    GET_HEROES_SUCCESS, 
    GET_HEROES_FAILURE, 
    DELETE_HERO_FAILURE, 
    DELETE_HERO_REQUEST, 
    DELETE_HERO_SUCCESS } from './heroesActions'

export const heroesRequest = () => ({
    type: GET_HEROES_REQUEST
})

export const heroesRequestSuccess = response => ({
    type: GET_HEROES_SUCCESS,
    payload: {
        response
    }
})

export const heroesRequestFailure = error => ({
    type: GET_HEROES_FAILURE,
    payload: {
        error
    },
    error: true
})

export const heroDelete = () => ({
    type: DELETE_HERO_REQUEST
})

export const heroDeleteSuccess = response => ({
    type: DELETE_HERO_SUCCESS,
    payload: {
        response
    }
})

export const heroDeleteFailure = error => ({
    type: DELETE_HERO_FAILURE,
    payload: {
        error
    },
    error: true
})