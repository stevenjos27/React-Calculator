import React from 'react';
import './ButtonPanel.css';
import Buttons from '../Buttons/Buttons';
import PropTypes from 'prop-types';

class ButtonPanel extends React.Component {
    static propTypes = {
        clickData: PropTypes.func,
    };

    clickHandler = (data) => {
        this.props.clickData(data);
    }

    render() {
        return (
            <div>
                <div className="btn">
                    <Buttons name="AC" clickData={this.clickHandler} black />
                    <Buttons name="+/-" clickData={this.clickHandler} black />
                    <Buttons name="%" clickData={this.clickHandler} black />
                    <Buttons name="÷" clickData={this.clickHandler} orange />
                </div>
                <div>
                    <Buttons name="7" clickData={this.clickHandler} black />
                    <Buttons name="8" clickData={this.clickHandler} black />
                    <Buttons name="9" clickData={this.clickHandler} black />
                    <Buttons name="x" clickData={this.clickHandler} orange />
                </div>
                <div>
                    <Buttons name="4" clickData={this.clickHandler} black />
                    <Buttons name="5" clickData={this.clickHandler} black />
                    <Buttons name="6" clickData={this.clickHandler} black />
                    <Buttons name="-" clickData={this.clickHandler} orange />
                </div>
                <div>
                    <Buttons name="1" clickData={this.clickHandler} black />
                    <Buttons name="2" clickData={this.clickHandler} black />
                    <Buttons name="3" clickData={this.clickHandler} black />
                    <Buttons name="+" clickData={this.clickHandler} orange />
                </div>
                <div>
                    <Buttons name="0" clickData={this.clickHandler} wide black/>
                    <Buttons name="." clickData={this.clickHandler} black/>
                    <Buttons name="=" clickData={this.clickHandler} orange />
                </div>
            </div>
        );
    }
}

export default ButtonPanel;