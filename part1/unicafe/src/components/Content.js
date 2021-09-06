import React from 'react';

const Content = ({ratings}) => { 

    const ratings_data = {ratings};
    const total = ratings_data.neutralfeedback + ratings_data.goodfeedback + ratings_data.badfeedback;
    const avg = ((ratings.goodfeedback - ratings_data.badfeedback) / total) * 100;
    const avg_positive = (ratings_data.goodfeedback / total) * 100;

    return ( 
        <div> 
            <p>Good: {ratings.goodfeedback}</p>
            <p>Neutral: {ratings.neutralfeedback}</p>
            <p>Bad: {ratings.badfeedback}</p>
            <p>Total: {total}</p>
            <p>Average: {avg}</p>
            <p>Postitive: {avg_positive}</p>
        </div>
    ); 
}

export default Content;