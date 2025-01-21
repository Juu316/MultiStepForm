import React from 'react'

const StepTwo = (props) => {
    const {handleBackStep, handleNextStep} = props;
  return (
    <div>
      <p>Step Two</p>
      <button onClick={handleNextStep}>next</button>
      <button onClick={handleBackStep}>back</button>
    </div>
  )
}

export default StepTwo
