import {connect} from 'react-redux'
import {
    getHeroesRequest,
    getHeroesSuccess,
    getHeroesFailure,
    deleteHeroRequest,
    deleteHeroSuccess,
    deleteHeroFailure
} from '../Actions'
import {api} from '../Api'
import Heroes from '../Components/Heroes/Heroes'

const mapStateToProps = state => ({
    heroes: state.heroesReducers.heroes
})

const mapDispatchToProps = dispatch => ({
    getHeroes: () => {
        dispatch(getHeroesRequest())

        return api.getHeroesRequest()
            .then(response => dispatch(getHeroesSuccess(response.data)))
            .catch(error => dispatch(getHeroesFailure(error)))
    },
    deleteHero: id => {
        dispatch(deleteHeroRequest())

        return api.deleteHeroRequest(id)
            .then(response => dispatch(deleteHeroSuccess(id)))
            .catch(error => dispatch(deleteHeroFailure(error)))
    }
})

const HeroesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Heroes)

export default HeroesContainer