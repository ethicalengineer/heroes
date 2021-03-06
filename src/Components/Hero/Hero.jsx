import React from 'react'
import HeroField from './HeroField/HeroField'
import { getHeroRequest, updateHeroRequest } from '../../Api'

class Hero extends React.Component {
    state = {
        hero: {
            name: '',
            patronymic: '',
            surname: '',
        }
    }

    // Загружаем информцию по герою при старте компонента
    componentDidMount() {
        this.getHero(this.props.match.params.id);
    }

    // Получаем информацию о герое по ID
    getHero = id => {
        getHeroRequest(id)
        .then(result => {this.setState({hero: result})})
        .catch(e => console.log(e));
    }

    // Обрабатываем изменение полей
    handleChange = event => {
        const { name, value } = event.target

        this.setState({hero: {
            ...this.state.hero,
            [name]: value
        }})
    }

    // Обрабатываем отправку формы
    handleSubmit = event => {
        event.preventDefault();

        updateHeroRequest(this.state.hero)
        .then(result => {
            this.props.history.goBack();
        })
        .catch(e => console.log(e));
    }

    render() {
        const { name, patronymic, surname, email, phone } = this.state.hero
        return(
            <form onSubmit={this.handleSubmit}>
                <HeroField
                  label="Фамилия"
                  fieldName="surname"
                  fieldContent={surname}
                  changeField={this.handleChange}
                />
                <HeroField
                  label="Имя"
                  fieldName="name"
                  fieldContent={name}
                  changeField={this.handleChange}
                />
                <HeroField
                  label="Отчество"
                  fieldName="patronymic"
                  fieldContent={patronymic}
                  changeField={this.handleChange}
                />
                <HeroField
                  label="Электронная почта"
                  fieldName="email"
                  fieldContent={email}
                  changeField={this.handleChange}
                />
                <HeroField
                  label="Телефон"
                  fieldName="phone"
                  fieldContent={phone}
                  changeField={this.handleChange}
                />
                <input type="submit" value="Отправить" />
            </form>
        )
    }
}

export default Hero