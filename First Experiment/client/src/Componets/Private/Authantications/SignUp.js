import React, { useState } from 'react';


const SignUp = ()=>{
    const [step, setStep] = useState(1);

    const handleStepChange = (newStep) => {
        setStep(newStep);
      };
    

    return(<>
            <div>
      {step === 1 && <EmailOTP onNext={() => handleStepChange(2)} />}
      {step === 2 && <MobileOTP onNext={() => handleStepChange(3)} />}
      {step === 3 && (
        <form>
          <label>Name:</label>
          <input type="text" required />
          
          <label>Username:</label>
          <input type="text" required />
          
          <label>Password:</label>
          <input type="password" required />
          
          <label>Confirm Password:</label>
          <input type="password" required />
          
          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
    </>)
}

export {SignUp}