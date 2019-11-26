import React from 'react'
import PropTypes from 'prop-types'
import './herocard.css'

const HeroCard = ({ hero: { name, surname, patronymic, id, phone }, getHero, deleteHero }) => (
    <div className='user-card' onClick={() => getHero(id)}>
        <p>ФИО: {surname} {name} {patronymic}</p>
        <p>Телефон: {phone}</p>
        <button onClick={event => deleteHero(id, event)}>Удалить</button>
    </div>
)

HeroCard.propTypes = {
    hero: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        patronymic: PropTypes.string
    })
}

export default HeroCard