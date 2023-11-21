import { useState } from 'react'
import PuppyList from './PuppyList.jsx'
import PuppyDetails from './PuppyDetails.jsx'


const App = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [singlePuppyDetailsURL, setSinglePuppyDetailsURL] = useState('');

  return (
    <>
    <h1>Puppies</h1>
    {
       showDetails ? <PuppyDetails /> : <PuppyList setShowDetails={setShowDetails} setSinglePuppyDetailsURL={setSinglePuppyDetailsURL}/>
    }
    {
      console.log(singlePuppyDetailsURL)
    }

   
    </> 
  )
}

export default App
