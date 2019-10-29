import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ControlledInput extends React.Component{

    state ={text:'booom'};

    handleChange = (event) => {
        let text = event.target.value;
        text = text.replace(/[0-9]/g, '');
        this.setState({text});
    };

    render () {
        return(
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
        );
    }
}




ReactDOM.render(<ControlledInput />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

