function inputIsValid(
  inputError,
  emptyMesage,
  errorMessage,
  inputElement,
  inputValue,
  errorTextElement
) {
  inputElement.insertAdjacentElement("afterend", errorTextElement);

  if (inputValue.getInputValue().length === 0) {
    errorTextElement.textContent = emptyMesage;
  } else if (inputError) {
    errorTextElement.textContent = errorMessage;
  } else {
    errorTextElement.textContent = "";
  }
}

export default inputIsValid;
