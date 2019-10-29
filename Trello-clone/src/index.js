import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TrelloList = ({features})=> {
    return(
        <div className = "trello-list">
            <h3 className ="list-name">Phone features</h3>
            {features.map( spec => <TrelloItem  key = {features.id} feature = {spec}/>)}
        </div>
    );
}



const TrelloItem = ({feature})=> {
    
    return (
        
        <div className = "trello-item">
            {feature.feature}
        </div>
        
    );
}
    
const samples = [ 

    {
        id:1,
        feature: 'bluetooth'
    },
    {
        id:2,
        feature: 'WIFI'
    },
    {
        id:3,
        feature: 'Scratch Resistance'
    },
    {
        id:4,
        feature: ' Surround Sound'
    },
    {
        id:5,
        feature: ' Surround Sound'
    },
    ,
    {
        id:6,
        feature: ' Surround Sound'
    },
    

]

ReactDOM.render( <TrelloList features= {samples}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

