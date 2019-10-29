import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { file } from '@babel/types';
import moment from 'moment';
import {Time} from './time';

const FileList = ({files}) => {
    return(
        <div className = 'file-list'>
            {files.map(file => ( <FileListItem key = {file.id} file ={file}/>))}
        </div>
    );
}

const FileListItem = ({file}) => {
    <div className = "file-list-item">
        <FileIcon file = {file}/>
        <FileName file = {file}/>
        <CommitMessage commit = {file.latestCommit}/>
        <Time time ={file.updated_at}/>
    </div>
}

const FileName = ({file}) => {
    return[
        <FileIcon file ={file} key={0}/>,
        <span className = "file-name" key = {1}> {file.name} </span>
    ];
}
const FileIcon = ({file})=> {
    let icon = 'fa-file-text-o';

    if (file.type === 'folder'){
        icon = 'fa-folder';
    }
    
    return(
        <div className ="file-icon">
            <i className ={`fa ${icon}`}/>
        </div>
    );
}

const CommitMessage = ({commit})=>{
    
    return (
        <div className ="commit-message">{commit.message}</div>
    );
}
const testFiles = [
    { 
        id:1,
        name:'src',
        type:'folder',
        updated_at:"2019-05-21 21:24:00",
        latestCommit: {
            message: 'Initial commit',
        }
    },
    {
        id:2,
        name:'test',
        type:'folder',
        updated_at:"2019-05-21 21:24:00",
        latestCommit: {
            message: 'Initial commit',
        },
    },
    {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2019-07-18 21:24:00", 
        latestCommit: {
            message: 'Added a readme' 
        }
        
    }         
]
    

ReactDOM.render(<FileList files = {testFiles}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

