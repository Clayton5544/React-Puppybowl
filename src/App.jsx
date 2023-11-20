import { useState } from 'react'
import PuppyList from './PuppyList.jsx'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Puppies</h1>
    <PuppyList />
   
    </>
  )
}

export default App
