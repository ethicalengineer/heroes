import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        margin: theme.spacing(2, 1),
    }
});

class HeroMultiSelectField extends React.Component {

    /**
     * Обработчик изменений
     * @param event событие
     */
    handleChange = event => {
        const {value: selectedValues} = event.target;
        const {name, items, itemValueProp} = this.props;
        const values = items.filter(item => selectedValues.includes(item[itemValueProp]));

        this.props.handleChange(name, values, event);
    };

    /**
     * Отрисовка
     * @returns {*}
     */
    render() {
        const {
            classes, label, values,
            items, itemLabelProp, itemValueProp
        } = this.props;
        return (
            <div className={classes.container}>
                <FormControl
                    fullWidth={true}>
                    <InputLabel>{label}</InputLabel>
                    <Select
                        multiple
                        value={values.map(value => value[itemValueProp])}
                        onChange={this.handleChange}
                        input={<Input/>}>
                        {items.map(item => (
                            <MenuItem
                                key={item[itemValueProp]}
                                value={item[itemValueProp]}>{item[itemLabelProp]}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }

}

HeroMultiSelectField.propTypes = {

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
     * Массив объектов
     */
    values: PropTypes.array,

    /**
     * Допустимые значения
     * Массив объектов
     */
    items: PropTypes.array,

    /**
     * Поле допустимого значения с подписью
     */
    itemLabelProp: PropTypes.string,

    /**
     * Поле допустимого значения со значением
     */
    itemValueProp: PropTypes.string,

    /**
     * Обработчик изменений
     */
    handleChange: PropTypes.func,

};

export default withStyles(styles)(HeroMultiSelectField);