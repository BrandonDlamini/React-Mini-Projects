import React from 'react';

const CommitMessage = ({ commit }) => (
    <span>{commit.message}</span>
);

export {CommitMessage};