"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FormFinished from "./FormFinished";
import { motion } from "motion/react";
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });
  const Step = [StepOne, StepTwo, StepThree, FormFinished][currentStep];

  const handleNextStep = () => setCurrentStep((currentStep) => currentStep + 1);

  const handleBackStep = () => setCurrentStep((currentStep) => currentStep - 1);

  return (
    <Step handleBackStep={handleBackStep} handleNextStep={handleNextStep} />
  );
};

export default MultiStepForm;
export function Component({ isVisible }) {
  return <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />;
}
