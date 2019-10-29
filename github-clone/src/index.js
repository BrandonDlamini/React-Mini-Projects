import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Time} from './time';
import {testFiles} from './testfiles';
import {FileIcon} from './file-icon';
import {FileListItem} from './file-list-item';






const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {files.map(file =>             //Mapping over an array like this is how you render lists of things in React.
                <FileListItem key={file.id} file={file} />
            )}
        </tbody>
    </table>

); 

const FileListItem = ({ file }) => (
    <tr className = "file-list-item">
        <td className = "file-icon"><FileIcon file={file} /></td>
        <td className = "file-name"><FileName file={file} /></td>
        <td className = "commit-message"><CommitMessage commit={file.latestCommit} /></td>
        <td className = "age"><Time time={file.updated_at}/></td>
    </tr>
);















    

ReactDOM.render(<FileList files = {testFiles}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

