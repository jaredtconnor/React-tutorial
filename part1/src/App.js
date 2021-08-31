import React from 'react'

const App = () => { 
  const course = 'Half Stack application development'
  const parts = [ 
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

  const Header = (props) => {
    return ( 
      <div> 
        <h1>{props.course}</h1>
      </div>
    )
  }

  const Content = () => { 

  return ( 
    <div>
      <p>
        {part1} {ex1}
      </p>
      <p>
        {part2} {ex2}
      </p>
      <p>
        {part3} {ex3}
      </p>
    </div>
  )}

  const Total = () => { 

    return ( 
      <div>
        <h1>{course}</h1>
        <p>Number of exercies {ex1 + ex2 + ex3}</p>
      </div> 
    )
  }

  return ( 
    <div> 
      <Header course="Some Course" />
      <Content/>
      <Total/>
    </div>
  )
}
export default App