import React from 'react';
import '../Components/ButtonPanel/ButtonPanel.css';

class ButtonPanel extends React.Component {

    output = '11111';

    operator = () => {};

    clear() {
        this.setState({output: 'Nitin'});
    }

    render() {
        return (
            <div>
                <div className="component-display">
                    <div> {this.output} </div>
                </div>

                <div className="btn">
                    <span>
                        <button onClick={this.clear}>AC</button>
                    </span>
                    <span>
                        <button>+/-</button>
                    </span>
                    <span>
                        <button>%</button>
                    </span>
                    <span className='orange'>
                        <button>/</button>
                    </span>
                </div>

                <div>
                    <span>
                        <button>7</button>
                    </span>
                    <span>
                        <button>8</button>
                    </span>
                    <span>
                        <button>9</button>
                    </span>
                    <span className='orange'>
                        <button>*</button>
                    </span>
                </div>

                <div>
                    <span>
                        <button>4</button>
                    </span>
                    <span>
                        <button>5</button>
                    </span>
                    <span>
                        <button>6</button>
                    </span>
                    <span className='orange'>
                        <button>-</button>
                    </span>
                </div>

                <div>
                    <span>
                        <button>1</button>
                    </span>
                    <span>
                        <button>2</button>
                    </span>
                    <span>
                        <button>3</button>
                    </span>
                    <span className='orange'>
                        <button>+</button>
                    </span>
                </div>

                <div>
                    <span className='wide'>
                        <button>0</button>
                    </span>
                    <span>
                        <button>.</button>
                    </span>
                    <span className='orange'>
                        <button>=</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default ButtonPanel;