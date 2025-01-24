import React from "react";
import { isStepOneValid } from "@/utils/stepOneValidation";
import { motion } from "motion/react";
const StepOne = (props) => {
  const { handleNextStep, setFormValue, formValue, handleError, error } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
  };

  const handleFormNextStep = () => {
    const { isValid, errors } = isStepOneValid(formValue);

    if (isValid) {
      handleNextStep();
    }
    handleError(errors);
    //error
  };

  return (
    <div className="flex justify-center items-center max-h-screen h-screen">
      <div className="bg-[#FFF] flex flex-col justify-between items-start shrink-0 rounded-[8px] w-[480px] h-[655px] p-[32px] ">
        <div className="mb-7 space-y-2">
          <img
            alt="Pinecone logo"
            width="60"
            height="60"
            src="images/pineconeLogo.png"></img>
          <h2 className="flex inter text-[26px] self-stretch text-foreground font-semibold">
            Join Us! 😎
          </h2>
          <p className="flex w-full inter text-[18px] self-stretch whitespace-nowrap text-[#8E8E8E]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="flex flex-col flex-grow gap-y-3 w-full">
          <div className="inter text-sm font-semibold leading-4 text-[#334155]">
            First name <span className="text-[rgb(225,73,66)]">*</span>
          </div>
          <input
            name={"firstName"}
            className="inter w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            placeholder="Your first name"
            onChange={(e) => {
              setFormValue({ ...formValue, firstName: e.target.value });
            }}
          />
          {error && <p className="inter text-[#e14942]">{error.firstName}</p>}
          <div className="inter text-sm font-semibold leading-4 text-[#334155]">
            Last name <span className="text-[rgb(225,73,66)]">*</span>
          </div>
          <input
            className="inter w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            placeholder="Your last name"
            onChange={(e) => {
              setFormValue({ ...formValue, lastName: e.target.value });
            }}
          />
          <div className="inter text-sm font-semibold leading-4 text-[#334155]">
            Username <span className="text-[rgb(225,73,66)]">*</span>
          </div>
          <input
            className="inter w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            placeholder="Your username"
            onChange={(e) => {
              setFormValue({ ...formValue, userName: e.target.value });
            }}
          />
        </div>
        <button
          className="inter flex w-full py-[10px] px-[12px] justify-center items-center gap-[4px] rounded-[6px] bg-[#121316] text-white font-medium text-[16px] not-italic leading-[24px] tracking-[-0.16px] transition-all duration-300 hover:opacity-80"
          onClick={handleFormNextStep}>
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
export function Component({ isVisible }) {
  return <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />;
}
