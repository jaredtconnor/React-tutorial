import React from 'react';

import Part from './Part';

const Content = ({parts}) => { 

    // using `map()` here to iterate over the parts array
    return ( 
        parts.map((part, i) => <Part key={i} part={part} />)
    ); 
}

export default Content;