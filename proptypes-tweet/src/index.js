import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types'


function Tweet({tweet}) {
    return(
        <div className='tweet'>
            <Avatar hash={tweet.gravatar}/>
            <div className = "content">
                <NameWithHandle author={tweet.author}/>
                <Time time={tweet.timestamp}/>
                <Message text ={tweet.message}/>
                <div className = "buttons">
                    <ReplyButton/>
                    <RetweetButton count ={tweet.retweets}/>
                    <LikeButton count = {tweet.likes}/>
                    <MoreOptionsButton/>
                </div>    
            </div>
        </div>
    );
}

Tweet.propTypes ={
    tweet: PropTypes.object.isRequired
}

var testTweet = {
    message: "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    gravatar: "a3331854d211f29f6ab6526a943b209f",
    author: {
        handle: "webdeb",
        name: "Debbie"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2019-07-30 21:24:37"
};
function Avatar({ hash }) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img src = {url} 
        className = "avatar" 
        alt = "avatar"/>
    );
}
Avatar.propTypes={
 hash: PropTypes.string
};

function Message({ text }) {
    return (
        <div className='message'>
            {text}
        </div>
    );
}
Message.propTypes ={
    text:PropTypes.string
};

function NameWithHandle ({author}) {
    const {name, handle} = author;
    return (
    <span className = "name-with-handle">
        <span className = "name">{name}</span>
        <span className = "handle">@{handle}</span>
    </span>
    );
}
NameWithHandle.propTypes = {
    author:PropTypes.shape({
        name:PropTypes.string.isRequired,
        handle:PropTypes.string.isRequired
    }).isRequired

}

const Time = ({ time }) => 
        <span className = "time"> {moment(time).fromNow()}</span>
    
Time.propTypes ={
    time: PropTypes.string
}; 
const ReplyButton = () =>  (
    <i className= "fa fa-reply reply-button"/>
);

function getRetweetCount(count){
    if(count> 0 ){
        return(
            <span className = "retweet-count">
                {count}
            </span>
        );
    }
    else{
        return null;
    }
}

const RetweetButton = ({count}) => (
    <span className = "retweet-button">
        <i className = "fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
);
RetweetButton.propTypes ={
    count:PropTypes.number
};

const LikeButton = ({count}) => (
    <span className = "like-button">
        <i className = "fa fa-heart"/>
        {count > 0 && <span className="like-count">
            {count}</span>}
    </span> 
);
 LikeButton.propTypes = {
     count: PropTypes.number
 };
const MoreOptionsButton = () => (
    <li className = "fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet tweet ={testTweet}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

