import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import HeroTextField from './Fields/HeroTextField';
import HeroMultiSelectField from './Fields/HeroMultiSelectField';
import HeroRepository from '../../Data/Repository/HeroRepository';
import RoleRepository from '../../Data/Repository/RoleRepository';

const styles = theme => ({
    formContainer: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 350,
    },
    formWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(3, 4),
    }
});

class Hero extends React.Component {

    state = {

        /**
         * Герой
         */
        hero: {

            /**
             * Фамилия
             */
            surname: '',

            /**
             * Имя
             */
            name: '',

            /**
             * Отчество
             */
            patronymic: '',

            /**
             * Телефон
             */
            phone: '',

            /**
             * Электронная почта
             */
            email: '',

            /**
             * Роли
             */
            roles: [],

        },

        /**
         * Доступные роли
         */
        roleItems: [],

    };

    componentDidMount() {

        /* Загрузка ролей */
        RoleRepository.getRoles()
            .then(roles => this.setState({roleItems: roles}))
            .catch(e => console.log(e));

        /* Загрузка героя */
        HeroRepository.getHero(this.props.match.params.id)
            .then(hero => this.setState({hero: hero}))
            .catch(e => console.log(e));
    }

    handleChange = (name, value) => {
        this.setState({
            hero: {
                ...this.state.hero,
                [name]: value
            }
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        HeroRepository.updateHero(this.state.hero)
            .then(hero => {
                this.props.history.push(`/`);
                // this.props.history.goBack();
            })
            .catch(e => console.log(e));
    };

    render() {

        const {classes} = this.props;
        const {roleItems} = this.state;
        const {surname, name, patronymic, phone, email, roles} = this.state.hero;

        return (
            <Paper className={classes.formContainer}>
                <form className={classes.formWrapper} onSubmit={this.handleSubmit}>

                    <HeroTextField label="Фамилия" name="surname" value={surname}
                                   handleChange={this.handleChange}/>

                    <HeroTextField label="Имя" name="name" value={name}
                                   handleChange={this.handleChange}/>

                    <HeroTextField label="Отчество" name="patronymic" value={patronymic}
                                   handleChange={this.handleChange}/>

                    <HeroTextField label="Телефон" name="phone" value={phone}
                                   handleChange={this.handleChange}/>

                    <HeroTextField label="Электронная почта" name="email" value={email}
                                   handleChange={this.handleChange}/>

                    <HeroMultiSelectField label="Роли" name="roles" values={roles}
                                          handleChange={this.handleChange}
                                          items={roleItems} itemLabelProp="role" itemValueProp="id"/>

                    <Button type="submit" variant="contained" color="primary">Отправить</Button>

                </form>
            </Paper>
        )
    }
}

export default withStyles(styles)(Hero);