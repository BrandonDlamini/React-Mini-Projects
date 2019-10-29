import React from 'react';
import ReactDOM from 'react-dom';



function MyThing(){
    
    
return React.createElement(
    'div',{},
        React.createElement('div',{className: 'book'},'Title'), 
            React.createElement('div',{className: 'author'},'The Author'),
                React.createElement('ul',{className: 'stats'},
                    React.createElement('li',{className: 'rating'},'5 starts'), React.createElement('li',{className: 'isbn'},'12-345678-910'))
                    );
    

}
function ValidateLogin(){
    var isLoggedIn = true;
    
    return(
        <span>
            {isLoggedIn ? 'Logged in': 'not Logged in'}
        </span>
    );
}
ReactDOM.render(<MyThing />, document.getElementById('root'));
ReactDOM.render(<ValidateLogin />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

