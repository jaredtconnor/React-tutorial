import React from 'react'; 

const Display = ({counter}) => { 

    return ( 
        <div>{counter}</div>
    );
}

const Button = ({onClick, text}) => { 

    return ( 
        <button onClick={onClick}> 
            {text} 
        </button>
    );
}

export { 
    Display, 
    Button
};