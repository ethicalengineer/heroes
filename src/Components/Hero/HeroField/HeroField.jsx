import React from 'react'

class HeroField extends React.Component {
    render() {
        const { label, fieldName, fieldContent, changeField } = this.props
        return (
            <p>
                <label>
                    {label}:
                    <input name={fieldName} type="text" value={fieldContent} onChange={event => changeField(event)} />
                </label>
            </p>
        )
    }
}

export default HeroField