import React from 'react';
import {Time} from './time';
import {testFiles} from './testfiles';
import {FileIcon} from './file-icon';
import {FileName} from './file-name';
import {CommitMessage} from './commit-message';

const FileListItem = ({ file }) => (
    <tr className = "file-list-item">
        <td className = "file-icon"><FileIcon file={file} /></td>
        <td className = "file-name"><FileName file={file} /></td>
        <td className = "commit-message"><CommitMessage commit={file.latestCommit} /></td>
        <td className = "age"><Time time={file.updated_at}/></td>
    </tr>
);

export {FileListItem};