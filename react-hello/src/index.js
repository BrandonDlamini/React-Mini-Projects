import React from 'react';
import ReactDOM from 'react-dom';

const Test = () => {
    return(
        <IconButton> brandon </IconButton>
    );
}

const IconButton = ({children}) =>{
    return(
        <button>
            <i class="icon-eur"/> 
            {children}
        </button>
    );
}

ReactDOM.render(<Test/>, document.querySelector('#root'));