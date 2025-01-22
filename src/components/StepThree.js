import React from 'react'

const StepThree = (props) => {
  const { handleBackStep, handleNextStep, setFormValue, formValue } = props;
  return (
    <div className="flex justify-center items-center max-h-screen h-screen">
      <div className="bg-[#FFF] flex flex-col items-start shrink-0 rounded-[8px] w-[480px] h-[655px] p-[32px] ">
        
          <div className="mb-7 space-y-2">
          <img
            alt="Pinecone logo"
            width="60"
            height="60"
            src="images/pineconeLogo.png"></img>
          <h2 class="inter text-[26px] text-foreground font-semibold">
            Join Us! 😎
          </h2>
          <p class="inter font-medium text-[18px] whitespace-nowrap text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="flex w-full">
          <button
            className="inter flex items-center justify-center w-32 gap-x-3 rounded-md border border-[#CBD5E1] transition-all duration-300 hover:bg-gray-100"
            onClick={handleBackStep}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.705 7.41L14.295 6L8.29501 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z" fill="#202124"/>
</svg>

            Back
            
          </button>
          <button
            className="inter flex w-full py-[10px] px-[12px] justify-center items-center gap-[4px] rounded-[6px] bg-[#121316] text-white font-medium text-[16px] not-italic leading-[24px] tracking-[-0.16px] transition-all duration-300 hover:opacity-80"
            onClick={handleNextStep}>
            Continue<span className="font-normal">3/3</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none">
              <path
                d="M10.205 6L8.79504 7.41L13.375 12L8.79504 16.59L10.205 18L16.205 12L10.205 6Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StepThree
