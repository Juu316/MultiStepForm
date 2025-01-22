import React from "react";

const FormFinished = () => {
  return (
    <div className="flex justify-center items-center max-h-screen h-screen">
      
      <div className="space-y-2 bg-white rounded-lg w-[480px] p-8">
        <img
          alt="pinecone logo"
          src="images/pineconeLogo.png"
          width="60"
          height="60"></img>
        <h2 className="inter text-[26px] text-[#202124] font-semibold">
          You're All Set! 🔥
        </h2>
        <p className="inter text-lg text-[#8E8E8E] font-normal">
          We've received your submission. Thank you!
        </p>
      </div>
    </div>
  );
};

export default FormFinished;
