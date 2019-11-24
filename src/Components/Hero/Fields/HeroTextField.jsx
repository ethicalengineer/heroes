import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        margin: theme.spacing(2, 1),
    }
});

class HeroTextField extends React.Component {

    /**
     * Обработчик изменений
     * @param event событие
     */
    handleChange = event => {
        this.props.handleChange(this.props.name, event.target.value, event);
    };

    /**
     * Отрисовка
     * @returns {*}
     */
    render() {
        const {classes, label, value} = this.props;
        return (
            <div className={classes.container}>
                <TextField
                    fullWidth={true}
                    label={label}
                    value={value}
                    onChange={this.handleChange}/>
            </div>
        );
    }

}

HeroTextField.propTypes = {

    /**
     * Подпись
     */
    label: PropTypes.string,

    /**
     * Название поля
     */
    name: PropTypes.string,

    /**
     * Значение
     */
    value: PropTypes.string,

    /**
     * Обработчик изменений
     */
    handleChange: PropTypes.func,

};

export default withStyles(styles)(HeroTextField);