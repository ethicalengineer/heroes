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
        console.log(event.target)
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("submit")
    }

    render() {

        const { name, patronymic, surname } = this.state.hero

        return(
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>
                        Имя:
                        <input type="text" value={name} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Фамилия:
                        <input type="text" value={patronymic} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Отчество:
                        <input type="text" value={surname} onChange={this.handleChange} />
                    </label>
                </p>
                <input type="submit" value="Отправить" />
            </form>
        )
    }
}

export default Hero