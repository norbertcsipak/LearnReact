import logo from './logo.svg';
import './App.css';
import React from 'react'

// function App() {
//   console.log('Hello from the component...')
//   const now = new Date();
//   const a = 10;
//   const b = 20;

//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     )
//   )
// }

function App() {
  return(
    <div>
      <h1>Greetings</h1>
      <Hello message='Hope you are having a lovely day!'/>
    </div>
  )
}

const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello there! {props.message}</p>
    </div>
  )
}

export default App;
