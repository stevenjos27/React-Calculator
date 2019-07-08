import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css'

class Buttons extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        orange: PropTypes.bool,
        wide: PropTypes.bool,
        clickData: PropTypes.func,
    };

    clickHandler = () => {
        this.props.clickData(this.props.name);
    }

    render(){
        const className = [
            this.props.orange ? "orange": "",
            this.props.wide ? "wide" : "",
            this.props.black ? "black" : "",
        ];

        return (
            <span className={className.join(" ").trim()}>
                <button onClick={this.clickHandler}>{this.props.name}</button>
            </span>
        );
    }
}

export default Buttons;