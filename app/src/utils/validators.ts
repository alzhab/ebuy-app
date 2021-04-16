import errorMessages from './errorMessages';

const emailValidator = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const phoneValidator = /^\+7 \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}$/;

const emailPattern = {value: emailValidator, message: errorMessages.email};
const phonePattern = {value: phoneValidator, message: errorMessages.phone};

export default {
  emailPattern,
  phonePattern
}

