import React from "react";

const StepTwo = (props) => {
  const { handleBackStep, handleNextStep, setFormValue, formValue } = props;
  return (
    <div className="flex justify-center items-center max-h-screen h-screen">
      <div className="bg-[#FFF] flex flex-col justify-between items-start shrink-0 rounded-[8px] w-[480px] h-[655px] p-[32px] ">
        <div id="containerStep2">
          <div className="mb-7 space-y-2">
            <img
              alt="Pinecone logo"
              width="60"
              height="60"
              src="images/pineconeLogo.png"></img>
            <h2 className="inter text-[26px] text-foreground font-semibold">
              Join Us! 😎
            </h2>
            <p className="inter font-medium text-[18px] whitespace-nowrap text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>
          <div className="flex flex-col gap-y-3 w-full">
            <div className="inter text-sm font-semibold leading-4 text-[#334155]">
              Email <span className="text-[rgb(225,73,66)]">*</span>
            </div>
            <input
              className="inter w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              placeholder="Your email"
              onChange={(e) => {
                setFormValue({ ...formValue, email: e.target.value });
              }}></input>

            <div className="inter text-sm font-semibold leading-4 text-[#334155]">
              Phone number <span className="text-[rgb(225,73,66)]">*</span>
            </div>
            <input
              className="inter w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              placeholder="Your phone number"
              onChange={(e) => {
                setFormValue({ ...formValue, phoneNumber: e.target.value });
              }}></input>

            <div className="inter text-sm font-semibold leading-4 text-[#334155]">
              Password <span className="text-[rgb(225,73,66)]">*</span>
            </div>
            <input
              type="password"
              className="inter w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              placeholder="Your password"
              onChange={(e) => {
                setFormValue({ ...formValue, password: e.target.value });
              }}></input>

            <div className="inter text-sm font-semibold leading-4 text-[#334155]">
              Confirm password <span className="text-[rgb(225,73,66)]">*</span>
            </div>
            <input
              type="password"
              className="inter w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
              placeholder="Confirm your password"
              onChange={(e) => {
                setFormValue({ ...formValue, confirmPassword: e.target.value });
              }}></input>
          </div>
        </div>
        <div className="flex gap-x-2 w-full">
          <button
            className="inter flex items-center justify-center w-[128px] py-[10px] px-[12px] bg-white shrink-0 rounded-[6px] border border-[#CBD5E1] transition-all duration-300 hover:bg-gray-100"
            onClick={handleBackStep}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M15.705 7.41L14.295 6L8.29501 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
                fill="#202124"
              />
            </svg>
            Back
          </button>

          <button
            className="inter flex w-full py-[10px] px-[12px] justify-center items-center gap-[4px] rounded-[6px] bg-[#121316] text-white font-medium text-[16px] not-italic leading-[24px] tracking-[-0.16px] transition-all duration-300 hover:opacity-80"
            onClick={handleNextStep}>
            Continue<span className="font-normal">2/3</span>
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
  );
};

export default StepTwo;
