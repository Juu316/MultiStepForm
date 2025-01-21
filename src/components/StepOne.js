import React from "react";

const StepOne = (props) => {
  const { handleBackStep, handleNextStep } = props;
  return (
    <div className="flex justify-center items-center max-h-screen h-screen">
      <div className="bg-[#FFF] flex flex-col justify-between items-start shrink-0 rounded-[8px] w-[480px] h-[655px] p-[32px] ">
        <img alt="Pinecone logo" width="60" height="60" src="images/pineconeLogo.png"></img>
          <button
            className="flex w-full py-[10px] px-[12px] justify-center items-center gap-[4px] rounded-[6px] bg-[#121316] text-white font-medium text-[16px] not-italic leading-[24px] tracking-[-0.16px] "
            onClick={handleNextStep}>
            Continue<span className="font-normal">1/3</span>
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
  );
};

export default StepOne;
