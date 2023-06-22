function inputHandler(inputElement) {
  var inputValue = "";
  var isTouched = false;

  inputElement.addEventListener("input", (event) => {
    inputValue = event.target.value;
    isTouched = false;
  });

  inputElement.addEventListener("blur", (_) => {
    isTouched = true;
  });

  // return the getter method for each variables
  return {
    getInputValue: () => inputValue,
    getIsTouched: () => isTouched,
  };
}

export default inputHandler;
