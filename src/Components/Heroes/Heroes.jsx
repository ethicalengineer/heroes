import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from "@material-ui/core/styles/index";
import HeroCard from './HeroCard/HeroCard';
import HeroRepository from '../../Data/Repository/HeroRepository';
import DialogYesNo from "../Dialog/DialogYesNo";

const styles = theme => ({
    heroesContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "stretch",
        alignContent: "stretch",
        padding: theme.spacing(1),
    },
    heroCard: {
        flexGrow: 1,
        flexBasis: "300px",
    }
});

class Heroes extends React.Component {

    state = {

        /**
         * Герои
         */
        heroes: [],

        /**
         * Окно запроса на удаление
         */
        deleteDialog: {
            open: false,
            hero: null,
            title: '',
            text: '',
        },
    };

    componentDidMount() {
        this.fetchHeroes();
    }

    /**
     * Загрузить героев
     */
    fetchHeroes = () => {
        HeroRepository.getHeroes()
            .then(result => this.setState({heroes: result}))
            .catch(e => console.log(e));
    };

    /**
     * Убрать героя со страницы
     * @param id идентификатор героя
     */
    removeHeroFromPage = (id) => {
        const heroes = this.state.heroes.filter(hero => hero.id !== id);
        this.setState({heroes: heroes});
    };

    /**
     * Открыть карточку героя
     * @param id идентификатор героя
     */
    openHero = id => {
        this.props.history.push(`/hero/${id}`);
    };

    /**
     * Удалить героя
     * @param hero герой
     * @param event событие
     */
    deleteHero = (hero, event) => {
        event.stopPropagation();

        this.setState({
            deleteDialog: {
                ...this.state.deleteDialog,
                open: true,
                hero: hero,
                title: `${hero.surname} ${hero.name} ${hero.patronymic}`,
                text: `Вы действительно хотите удалить героя?`,
            }
        });
    };

    confirmDeleteHero = () => {
        const {id} = this.state.deleteDialog.hero;
        HeroRepository.deleteHero(id)
            .then(result => this.removeHeroFromPage(id))
            .catch(e => console.log(e));
        this.setState({
            deleteDialog: {
                ...this.state.deleteDialog,
                open: false,
                hero: null,
                title: '',
                text: '',
            }
        });
    };

    rejectDeleteHero = () => {
        this.setState({
            deleteDialog: {
                ...this.state.deleteDialog,
                open: false,
                hero: null,
                title: '',
                text: '',
            }
        });
    };

    render() {
        const {classes} = this.props;
        const {heroes, deleteDialog} = this.state;
        return (
            <div>
                <Typography variant="h3" component="h1" gutterBottom>
                    Hello, Heroes!
                </Typography>
                <div className={classes.heroesContainer}>
                    {heroes.map(hero => <HeroCard
                        className={classes.heroCard}
                        handleHeroClick={this.openHero}
                        handleHeroDelete={this.deleteHero}
                        key={hero.id}
                        hero={hero}/>)}
                </div>
                <DialogYesNo
                    open={deleteDialog.open}
                    title={deleteDialog.title}
                    text={deleteDialog.text}
                    handleYesClick={this.confirmDeleteHero}
                    handleNoClick={this.rejectDeleteHero}/>
            </div>
        );
    }
}

export default withStyles(styles)(Heroes);