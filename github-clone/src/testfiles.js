import React from 'react';

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

export { testFiles }