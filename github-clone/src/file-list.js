import React from 'react';

const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {files.map(file =>             //Mapping over an array like this is how you render lists of things in React.
                <FileListItem key={file.id} file={file} />
            )}
        </tbody>
    </table>

); 

export {FileList};