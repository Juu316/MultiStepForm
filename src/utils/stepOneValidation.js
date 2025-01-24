
export const isStepOneValid = (data) => {
  const { firstName, lastName, username } = data;
  const errors = {};
  let isValid = true;

  const nameRegex = /^[a-zA-Z]+$/;
  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;

  if (firstName.length <= 1) {
    errors.firstName = "First name must have at least 2 characters.";
    isValid = false;
  }
  if (!nameRegex.test(firstName)) {
    errors.firstName = "First name cannot contain special characters or numbers.";
    isValid = false;
  }
  if (lastName.length <= 1) {
    errors.lastName = "Last name must have at least 2 characters.";
    isValid = false;
  }
  if (!nameRegex.test(lastName)) {
    errors.lastName = "Last name cannot contain special characters or numbers.";
    isValid = false;
  }
  if (!usernameRegex.test(username)) {
    errors.username = "Username must be 3-20 characters long and can only contain letters and numbers.";
    isValid = false;
  }

  return { isValid, errors };
};