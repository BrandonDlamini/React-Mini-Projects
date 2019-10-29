import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

const TweetFeed = ({tweets}) =>{
    return (
        <div classame = "Tweets">
            {tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>)}
        </div>
    );
    
}
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


const testTweet = [
    {
    id:1,
    message: "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    gravatar: "a3331854d211f29f6ab6526a943b209f",
    author: {
        handle: "webdeb",
        name: "Debbie"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2019-07-30 21:24:37"
    },
    {
    id:2,
    message: "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
    gravatar: "a3331854d211f29f6ab6526a943b209f",
    author: {
        handle: "webdeb",
        name: "Debbie"
    },
    likes: 2,
    retweets: 1,
    timestamp: "2019-07-30 21:24:37"
    },
    {
        id:2,
        message: "There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.",
        gravatar: "a3331854d211f29f6ab6526a943b209f",
        author: {
            handle: "webdeb",
            name: "Debbie"
        },
        likes: 2,
        retweets: 1,
        timestamp: "2019-07-30 21:24:37"
        }


]

;
function Avatar({ hash }) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img src = {url} 
        className = "avatar" 
        alt = "avatar"/>
    );
}

function Message({ text }) {
    return (
        <div className='message'>
            {text}
        </div>
    );
}

function NameWithHandle ({author}) {
    const {name, handle} = author;
    return (
    <span className = "name-with-handle">
        <span className = "name">{name}</span>
        <span className = "handle">@{handle}</span>
    </span>
    );
}

const Time = ({ time }) => 
        <span className = "time"> {moment(time).fromNow()}</span>
    
 
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

const LikeButton = ({count}) => (
    <span className = "like-button">
        <i className = "fa fa-heart"/>
        {count > 0 && <span className="like-count">
            {count}</span>}
    </span>

    
);

const MoreOptionsButton = () => (
    <li className = "fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<TweetFeed tweets ={testTweet}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

