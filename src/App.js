import React, { Component } from 'react';
import Display from './Components/Display/Display';
import ButtonPanel from './Components/ButtonPanel/ButtonPanel';
//import calc from './logic/calc';
import cal from './logic/cal';
import './App.css';

class App extends Component {
    state = {
        total: null,
        next: null,
        operation: null
    };

    clickHandler = (data) => {
        this.setState(cal(this.state, data));
    }

    render() {
        return (
            <div className="container">
            <div className="div_style"></div>
                <Display value={this.state.next || this.state.total || "0"} />
                <ButtonPanel clickData={this.clickHandler}/>
            </div>
        )
    }
}

export default App;