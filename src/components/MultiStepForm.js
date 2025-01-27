"use client";

import React, { useState , useEffect} from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FormFinished from "./FormFinished";
import { motion, AnimatePresence } from "framer-motion";
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    picture: "",
  });
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    picture: "",
  });
  const Step = [StepOne, StepTwo, StepThree, FormFinished][currentStep];
  const handleError = (errors) => {
    setFormError((prev) => ({
      ...prev,
      ...errors,
    }));
  };
  let isValid = true;
  const handleNextStep = () => {
    if (isValid) {
     
      setCurrentStep((currentStep) => currentStep + 1);
    }
  };
  const handleBackStep = () => {
    if (isValid) {
      setCurrentStep((currentStep) => currentStep - 1);
    }
  };




  let stringData = JSON.stringify({formValue});
  localStorage.setItem(
    "formData",
    stringData
  );
let dataText = localStorage.getItem("formData");
let dataObj = JSON.parse(dataText);
 
  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      const parsedData = JSON.parse(data);
      setFormValue(parsedData);
      setCurrentStep(parsedData.currentStep || 0);
    }
  }, []);







  const animationVariants = { 
    enter: {opacity: 0, x: 0},
    center: {opacity: 1, x: 0},
    exit: {opacity: 0, x: 0},
  };
  return (  
    <div className="flex items-center justify-center bg-[#F4F4F4] w-screen h-screen">
      <AnimatePresence exitBeforeEnter>

        <motion.div
          key={currentStep}
          initial="enter"
          animate="center"
         variants={animationVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-[480px] h-[655px] bg-[#FFF] rounded-lg flex flex-col items-center justify-center"
        >
    <Step
      formValue={formValue}
      setFormValue={setFormValue}
      handleBackStep={handleBackStep}
      handleNextStep={handleNextStep}
      handleError={handleError}
      error={formError}
    />
    </motion.div>
    </AnimatePresence>
    </div>
  );
};

export default MultiStepForm;

