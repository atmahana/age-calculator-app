import dateIsValid from "./src/checkDateValidity";
import inputHandler from "./src/inputHandler";

const dayInputEl = document.querySelector("#day");
const monthInputEl = document.querySelector("#month");
const yearInputEl = document.querySelector("#year");

const dayOutput = document.querySelector("#output_days");
const monthOutput = document.querySelector("#output_months");
const yearOutput = document.querySelector("#output_years");

const btn = document.querySelector('button[type="submit"]');
const errorTexts = document.querySelectorAll(".error-text");

const dayInput = inputHandler(dayInputEl);
const monthInput = inputHandler(monthInputEl);
const yearInput = inputHandler(yearInputEl);

btn.addEventListener("click", (event) => {
  event.preventDefault();

  // check date validity and return the error object
  const { isError } = dateIsValid(dayInputEl, monthInputEl, yearInputEl);
  // check all input validity
  checkInputValidity(isError);

  // receive differences object from the function
  var differences = calculateAge();

  // check if any of the date difference isNaN
  const isNan =
    isNaN(differences.day) ||
    isNaN(differences.month) ||
    isNaN(differences.year);

  // check for any input date error
  const isErrors =
    isError.dayHasError || isError.monthHasError || isError.yearHasError;

  if (isNan || isErrors) {
    dayOutput.innerHTML = "--";
    monthOutput.innerHTML = "--";
    yearOutput.innerHTML = "--";
  } else {
    dayOutput.innerHTML = differences.day;
    monthOutput.innerHTML = differences.month;
    yearOutput.innerHTML = differences.year;
  }
});

// check all input validity and set the error messages accordingly if got error
function checkInputValidity(isError) {
  if (dayInput.getInputValue().length === 0) {
    errorTexts[0].innerHTML = errorMessages.isEmpty;
  } else if (isError.dayHasError) {
    errorTexts[0].innerHTML = errorMessages.isInvalid.invalidDay;
  } else {
    errorTexts[0].innerHTML = ``;
  }

  if (monthInput.getInputValue().length === 0) {
    errorTexts[1].innerHTML = errorMessages.isEmpty;
  } else if (isError.monthHasError) {
    errorTexts[1].innerHTML = errorMessages.isInvalid.invalidMonth;
  } else {
    errorTexts[1].innerHTML = ``;
  }

  if (yearInput.getInputValue().length === 0) {
    errorTexts[2].innerHTML = errorMessages.isEmpty;
  } else if (isError.yearHasError) {
    errorTexts[2].innerHTML = errorMessages.isInvalid.invalidYear;
  } else {
    errorTexts[2].innerHTML = ``;
  }
}

function calculateAge() {
  var currentDate = new Date(); // Get current date

  // Get user input
  var userDay = parseInt(dayInput.getInputValue());
  var userMonth = parseInt(monthInput.getInputValue() - 1); // Months are zero-based in JavaScript
  var userYear = parseInt(yearInput.getInputValue());

  // Create a new Date object using user input
  var birthDate = new Date(userYear, userMonth, userDay);

  // Calculate the difference in years, months, and days
  var ageYears = currentDate.getFullYear() - birthDate.getFullYear();
  var ageMonths = currentDate.getMonth() - birthDate.getMonth();
  var ageDays = currentDate.getDate() - birthDate.getDate();

  // Adjust the age if the current month and day are before the birth month and day
  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }

  // Adjust the age if the current day is before the birth day
  if (ageDays < 0) {
    var daysInLastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      0
    ).getDate();
    ageDays += daysInLastMonth;
    ageMonths--;
  }

  // Return the differences as an object
  return {
    day: ageDays,
    month: ageMonths,
    year: ageYears,
  };
}

const errorMessages = {
  isEmpty: "This field is required",
  isInvalid: {
    invalidDay: "Must be a valid day.",
    invalidMonth: "Must be a valid month",
    invalidYear: "Must be in the past",
  },
};
