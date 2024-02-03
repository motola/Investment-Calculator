import {useState} from 'react';

export default function InputUser() {

const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});
function handleChange (inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
     return {
        ...prevUserInput,
        [inputIdentifier]:newValue
     }
    })
}
return (
    <>
     <section id="user-input">
     <div className="input-group">
     <p>
     <label>INITIAL INVESTMENT</label>
     <input type="number" value={userInput.initialInvestment} required onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
     </p>
     
    <p>
     <label>ANNUAL INVESTMENT</label>
     <input type="number" value={userInput.annualInvestment} required onChange={(event) => handleChange('annualInvestment', event.target.value)} />
     </p>
     </div>
     
     <div className='input-group'>
     <p>
     <label>EXPECTED RETURN</label>
     <input type="number" value={userInput.expectedReturn} required onChange={(event) => handleChange('expectedReturn', event.target.value)} />
     </p>
     <p>
     <label>DURATION</label>
     <input type="number" value={userInput.duration} required onChange={(event) => handleChange('duration', event.target.value)}/>
     </p>
     </div>
     </section>
    
    </>
)
}