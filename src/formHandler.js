const formHandler = (elements) => {
  let values = {};
  elements.forEach((element) => {
    element.addEventListener("input", inputHandler);
    values = { [element.id]: element.value };
  });
};

function inputHandler(event) {
  let inputValue = event.target.value;
  return inputValue;
}
