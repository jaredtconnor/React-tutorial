import React from "react"

const Total = ({exercises}) => { 

    const total = exercises.reduce((a, b) => a + b, 0); 

    return (
        <p>Number of total exercies: {total}</p>
    ); 
}

export default Total;