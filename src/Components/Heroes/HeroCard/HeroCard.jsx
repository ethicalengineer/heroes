import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        alignContent: "stretch",
        maxWidth: 345,
        margin: theme.spacing(2),
        cursor: "pointer",
    },
    cardHeader: {
        flexGrow: 0
    },
    cardChips: {
        flexGrow: 0,
        padding: theme.spacing(0, 1.5),
        display: "flex",
        flexWrap: "wrap",
    },
    cardChip: {
        margin: theme.spacing(0.5),
    },
    cardContent: {
        flexGrow: 1,
    },
    cardActions: {
        flexGrow: 0,
        justifyContent: "flex-end"
    }
});

class HeroCard extends React.Component {
    render() {
        const {id, surname, name, patronymic, phone, email, roles} = this.props.hero;
        const {classes, className, hero, handleHeroClick, handleHeroDelete} = this.props;

        return (
            <Card className={`${classes.card} ${className}`} onClick={(event) => handleHeroClick(id, event)}>
                <CardHeader className={classes.cardHeader} title={`${surname} ${name} ${patronymic}`}/>
                <CardContent className={classes.cardChips}>
                    {roles.map(role => <Chip
                        className={classes.cardChip}
                        key={role.id}
                        size="small"
                        label={role.role}/>)}
                </CardContent>
                <CardContent className={classes.cardContent}>
                    <Typography variant="body2" color="textSecondary">
                        <b>Телефон:</b> {phone}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <b>Электронная почта:</b> {email}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary"
                            onClick={(event) => handleHeroDelete(hero, event)}>Удалить</Button>
                </CardActions>
            </Card>
        )
    }
}

HeroCard.propTypes = {

    /**
     * Обработка клика по герою
     */
    handleHeroClick: PropTypes.func,

    /**
     * Обработка удаления героя
     */
    handleHeroDelete: PropTypes.func,

};

export default withStyles(styles)(HeroCard);