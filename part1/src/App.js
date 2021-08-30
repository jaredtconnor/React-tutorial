import React from 'react'

const App = () => { 
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const ex1 = 10 
  const part2 = 'Using props to pass data'
  const ex2 = 7 
  const part3 = 'State of a component'
  const ex3 = 14

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