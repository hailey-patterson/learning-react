const App = () => {
  const Header = ['Half Stack application development']
  const Content= [
  {name: 'Fundamentals of React', part: 10},
  {name: 'Using props to pass data', part: 7},
  {name: 'State of a component', part: 14}
]
   let total = Content.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.part;
  }, 0);



  return (
    <div>
      <h1>{Header}</h1>
      <p>{Content[0].name} {Content[0].part}</p>
      <p>{Content[1].name} {Content[1].part}</p>
      <p>{Content[2].name} {Content[2].part}</p>

       <h5>Number of exercises: {total.toFixed(2)}</h5>
    </div>
    
  )
  return total
}
export default App
