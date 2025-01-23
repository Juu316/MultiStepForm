export const isStepOneValid = (data) => {
    
    const { firstName } = data;
    const errors = {};
    let isValid = true;
    if (firstName.length <=1) {
      errors.firstName =
        "First name cannot contain special characters or numbers.";
      isValid = false;
    }
    return { isValid, errors };
  };