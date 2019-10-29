import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Tweet() {
    return(
        <div className='tweet'>
            <Avatar/>
            <div className = "content">
                <NameWithHandle/><Time/>
                <Message/>
                <div className = "buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>    
            </div>
        </div>
    );
}

function Avatar() {
    return (
        <img src = "https://www.gravatar.com/avatar/a3331854d211f29f6ab6526a943b209f" 
        className = "avatar" 
        alt = "avatar"/>
    );
}

function Message() {
    return (
        <div className='message'>
            This is less than 140 characters.
        </div>
    );
}

function NameWithHandle () {
    return (
    <span className = "name-with-handle">
        <span className = "name">Brandon </span>
        <span className = "handle">@BrandonTheCreator </span>
    </span>
    );
}

const Time = () => (
    <span className = "time">3h ago</span>
);

const ReplyButton = () =>  (
    <i className= "fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i className = "fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className = "fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <li className = "fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

