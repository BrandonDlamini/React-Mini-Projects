import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ChildWithReset extends React.Component {
    alertParent = ()=> {
        this.props.onAction('Button was clicked')
    }
    render (){
        return(
            <div>
                <button onClick = {this.alertParent}>Click me</button>
                <button onClick = {this.props.onReset}>Reset</button>
            </div>
        );
    }
}


class ParentUsingCHildWithReset extends React.Component {
    state = {
        actionCount:0
    }


    handleAction = (action)=>  {
    console.log('child says', action);

    this.setState({
        actionCount: this.state.actionCount + 1

        });
    }

    ResetClicks = (action)=> {
       
        this.setState({
            actionCount: 0
        });
      
    }


    render () {

    return (
        <div>
            <ChildWithReset onAction ={this.handleAction} onReset={this.ResetClicks}/>
            <p>Clicked {this.state.actionCount} times</p>
            
        </div>
        );
    }
}






ReactDOM.render(<ParentUsingCHildWithReset/>, document.getElementById('root'));


