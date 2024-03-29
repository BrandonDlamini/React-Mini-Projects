import React from 'react';

function FileIcon({ file }) {
    let icon = 'fa-file-text-o';
    if(file.type === 'folder') {
        icon = 'fa-folder';
    }
    return (
        <i className={`fa ${icon}`} />
    );
}

export {FileIcon};