import React from 'react'

class Hero extends React.Component {
    state = {
        hero: {
            name: '',
            patronymic: '',
            surname: '',
        }
    }

    componentDidMount() {
        fetch(`/users?id=${this.props.match.params.id}`)
                .then(response => response.json())
                .then(result => {this.setState({hero: result})})
                .catch(e => console.log(e));
    }

    handleChange = event => {
        const { name, value } = event.target
        console.log(event.target)

        this.setState({hero: {
            ...this.state.hero,
            [name]: value
        }})
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch('/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.hero)})
                .then(response => response.json())
                .then(result => {
                    this.props.history.goBack();
                })
                .catch(e => console.log(e));
    
    }

    render() {
        const { name, patronymic, surname } = this.state.hero
        return(
            <form onSubmit={this.handleSubmit}>
                {/* from here*/}
                <p>
                    <label>
                        Фамилия:
                        <input name="surname" type="text" value={surname} onChange={this.handleChange} />
                    </label>
                </p>
                {/* to where*/}
                <p>
                    <label>
                        Имя:
                        <input name="name" type="text" value={name} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Отчество:
                        <input name="patronymic" type="text" value={patronymic} onChange={this.handleChange} />
                    </label>
                </p>
                <input type="submit" value="Отправить" />
                <select multiple>
                    <option value="1" selected>Первая роль</option>
                    <option value="2">Вторая роль</option>
                    <option value="3" selected>Третья роль</option>
                </select>
            </form>
        )
    }
}

export default Hero