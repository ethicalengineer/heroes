import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class DialogYesNo extends React.Component {

    render() {
        const {title, text, open, handleYesClick, handleNoClick} = this.props;

        return (<Dialog
            open={open}
            onClose={handleNoClick}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleNoClick} color="primary">
                    Нет
                </Button>
                <Button onClick={handleYesClick} color="primary" autoFocus>
                    Да
                </Button>
            </DialogActions>
        </Dialog>);
    }

}

DialogYesNo.propTypes = {

    /**
     * Заголовок
     */
    title: PropTypes.string,

    /**
     * Текст
     */
    text: PropTypes.string,

    /**
     * Отображать ли окно
     */
    open: PropTypes.bool,

    /**
     * Обработка клика по "Да"
     */
    handleYesClick: PropTypes.func,

    /**
     * Обработка клика по "Нет"
     */
    handleNoClick: PropTypes.func,

};

export default DialogYesNo;