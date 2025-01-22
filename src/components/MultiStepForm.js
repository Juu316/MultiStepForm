"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FormFinished from "./FormFinished";
import { motion } from "motion/react";
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formError, setFormError]= useState();
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
 const handleError = (errors)=>{
setFormError((prev)=>{

})}

  const handleNextStep = () => setCurrentStep((currentStep) => currentStep + 1);

  const handleBackStep = () => setCurrentStep((currentStep) => currentStep - 1);

  return (
    <Step formValue={formValue} setFormValue={setFormValue}   handleBackStep={handleBackStep} handleNextStep={handleNextStep} handleError={handleError}/>
  );
};

export default MultiStepForm;
export function Component({ isVisible }) {
  return <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />;
}