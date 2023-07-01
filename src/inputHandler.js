function inputHandler(inputElement) {
  var inputValue = "";

  inputElement.addEventListener("input", (event) => {
    inputValue = event.target.value;
  });

  // return the getter method for each variables
  return {
    getInputValue: () => inputValue,
  };
}

export default inputHandler;
