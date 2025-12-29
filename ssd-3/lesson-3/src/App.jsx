import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import Login from './Login';

function App() {
  const [count, setCount] = useState(0);


  function handleClick() {
    setCount(count + 1)
  }

  function reset() {
    setCount(0);
  }
  return (
    <>
      <Counter count={count} handleClick={handleClick} reset={reset} />
      <Counter count={count} handleClick={handleClick} reset={reset} />
      <button onClick={reset}>Reset ^</button>
      < Login />

    </>
  )
}

export default App
