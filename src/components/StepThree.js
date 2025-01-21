import React from 'react'

const StepThree = (props) => {
    const {handleBackStep, handleNextStep} = props;
  return (
    <div>
      <p>Step Three</p>
      <button onClick={handleNextStep}>next</button>
      <button onClick={handleBackStep}>back</button>
    </div>
  )
}

export default StepThree
