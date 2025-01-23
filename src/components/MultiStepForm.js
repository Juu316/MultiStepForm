"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import FormFinished from "./FormFinished";

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

  return (
    <Step
      formValue={formValue}
      setFormValue={setFormValue}
      handleBackStep={handleBackStep}
      handleNextStep={handleNextStep}
      handleError={handleError}
      error={formError}
    />
  );
};

export default MultiStepForm;

