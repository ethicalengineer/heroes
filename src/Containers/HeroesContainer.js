import { connect } from 'react-redux'
import { heroesRequest, heroesRequestSuccess, heroesRequestFailure, heroDelete, heroDeleteSuccess, heroDeleteFailure } from '../Actions'
import { getHeroesRequest, deleteHeroRequest } from '../Api'
import Heroes from '../Components/Heroes/Heroes'

const mapStateToProps = state => ({
    heroes: state.heroesReducers.heroes
})

const mapDispatchToProps = (dispatch, state) => ({
    getHeroes: () => {
        dispatch(heroesRequest())

        getHeroesRequest()
        .then(data => dispatch(heroesRequestSuccess(data)))
        .catch(
            error => {
                dispatch(heroesRequestFailure(error))
            }
        )
    },
    deleteHero: id => {
        dispatch(heroDelete())

        deleteHeroRequest(id)
        .then(data => {
            dispatch(heroDeleteSuccess(id))

            getHeroesRequest()
                .then(data => dispatch(heroesRequestSuccess(data)))
                .catch(
                    error => {
                        dispatch(heroesRequestFailure(error))
                    }
        )
        })
        .catch(
            error => {
                dispatch(heroDeleteFailure(error))
            }
        )

    //     
    // .then(result => this.getHeroes())
    // .catch(e => console.log(e));
    }
})

const HeroesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Heroes)
  
  export default HeroesContainer