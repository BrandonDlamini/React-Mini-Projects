import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Envelope = ({information1,information2})=> {
    return (
        <div className = 'envelop'>
            <div className = 'sender'>
                <AddressLable person = {information1}/>
            </div>
            <div className = 'reciever'>
                <AddressLable person = {information2}/>
            </div>
            <Stamp/>
        </div>
    );
}

const AddressLable = ({person}) => {
    const {name,street,city,areaCode} = person
    return(
        <div className = 'addressLable'>
            <div className = 'name'>{name}</div>
            <div className = 'street'>{street}</div>
            <div className = 'city'>{city}</div>
            <div className = 'Code'>{areaCode}</div>
        </div>

    );
}

// Stamp Component

const Stamp = () => {
    return(
        <div className = "stamp">Stamp</div>
    );
}

//user data
var sender = {
    name: 'Brandon',
    street: '215 Emily Hobhouse',
    city: 'Pretoria',
    areaCode: '0007'
};

var reciever = {
    name: 'Tumi',
    street: '115 Valley Road',
    city: 'Arcadia',
    areaCode: '0117'
};

ReactDOM.render(<Envelope information1 = {sender} information2 = {reciever}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

