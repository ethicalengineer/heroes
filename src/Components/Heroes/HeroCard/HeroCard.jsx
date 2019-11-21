import React from 'react'
import './herocard.css'

class HeroCard extends React.Component {
    render() {
        const { surname, name, patronymic, phone, id } = this.props.hero
        const { getHero } = this.props
        return (
            <div className='user-card' onClick={() => getHero(id)}>
                <p>ФИО: {surname} {name} {patronymic}</p>
                <p>Телефон: {phone}</p>
            </div>
        )
    }
}

export default HeroCard;