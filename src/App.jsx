import {useState} from 'react';
import InputUser from "./components/inputUser";
import Results from './components/Results';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

function handleInputChange (inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
   return {
      ...prevUserInput,
      [inputIdentifier]: +newValue
   } 
  })
}

const ResultOutput = userInput.duration > 0;
  return (
    <>
    
    <InputUser userInput={userInput} handleChange={handleInputChange} />
    { ResultOutput ? <Results userInput={userInput} />
    :  <p className='center'>'Duration should not be 0 or less than 0' </p>}
    </>
    
  )
}

export default App
