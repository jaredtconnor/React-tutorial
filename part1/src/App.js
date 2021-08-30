
const Hello = (props) => { 
  return ( 
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {  
  const name = 'Jack'
  const age = 15

  return ( 
  <div>
    <h1>Greetings</h1>
    <Hello name={name} age={age}/>
  </div>
  )
} 

export default App;