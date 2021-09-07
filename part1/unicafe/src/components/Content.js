import React from 'react';


const StaticLine = ({text, value}) => { 

    return ( 
       <p>{text}: {value}</p>        
    ); 
}

const Content = ({ratings, total, average, positive}) => { 

    if (total === 0){ 
        return( 

            <p>No feedback given</p>

        )       
    } else {
        return ( 
            <div> 
                <p>Good: {ratings.goodfeedback}</p>
                <p>Neutral: {ratings.neutralfeedback}</p>
                <p>Bad: {ratings.badfeedback}</p>
                <StaticLine text={"All"} value={total} />
                <StaticLine text={"Average"} value={average} />
                <StaticLine text={"Positive"} value={positive} />
            </div>
        ); 
     }
}

export { 
    StaticLine, 
    Content
}