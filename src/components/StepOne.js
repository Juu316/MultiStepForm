import React from 'react'

const StepOne = (props) => {
    const {handleBackStep, handleNextStep} = props;
  return (
    <div className="flex justify-center items-center">
      <div className='bg-[#FFF] flex flex-col justify-between items-start shrink-0 rounded-[8px] w-[480px] h-[655px] p-[32px] '></div>
      <button className="" onClick={handleNextStep}>next</button>
      <br></br>
      <button onClick={handleBackStep}>back</button>
    </div>
  )
}

export default StepOne
