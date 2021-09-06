import React, { useState } from 'react';

// Partials
import Header from './components/Header';
import Total from './components/Total';
import Content from './components/Content';

// Main app 
const App = () => { 

  const [counter, setCounter ] = useState(0); 

  const handleClick = () => { 
    setCounter(counter + 1);
  }

  const course = {
    name: 'Half Stack application development', 
    parts: [ 
      { 
        name: 'Fundamentals of React', 
        exercises: 10
      },
      { 
        name: 'Using props to pass data',
        exercises: 7
      }, 
      { 
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  
  const {name, parts} = course; 
  const exercises = parts.map(part => part.exercises);

  return ( 
    <div> 
      <Header courseName={name}/>
      <Content parts={parts}/>
      <Total exercises={exercises}/>
      <div>
        <button onClick={handleClick}>
          Increment Counter  
        </button> 
        <p>
          {counter}
        </p>
      </div>
    </div>
  );
}

export default App;