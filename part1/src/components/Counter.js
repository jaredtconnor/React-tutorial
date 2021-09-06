import React from 'react'; 

const Display = ({counter}) => { 

    return ( 
        <div>{counter}</div>
    );
}

const Button = (props) => { 

    return ( 
        <button onClick={props.onClick}> 
            {props.text} 
        </button>
    );
}

export { 
    Display, 
    Button
};