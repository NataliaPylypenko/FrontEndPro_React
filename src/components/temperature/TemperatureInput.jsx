import React, {Component} from 'react';

const scaleNames = {
    c: 'Цельсій',
    f: 'Фаренгейт'
};

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return (
            <fieldset>
                <legend>Введіть температуру в градусах {scaleNames[scale]}:</legend>
                <input value={temperature}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;