import dateIsValid from "./src/checkDateValidity";
import inputHandler from "./src/inputHandler";

const dayInputEl = document.querySelector("#day");
const monthInputEl = document.querySelector("#month");
const yearInputEl = document.querySelector("#year");

const dayOutput = document.querySelector("#output_days");
const monthOutput = document.querySelector("#output_months");
const yearOutput = document.querySelector("#output_years");

const dayInput = inputHandler(dayInputEl);
const monthInput = inputHandler(monthInputEl);
const yearInput = inputHandler(yearInputEl);

const btn = document.querySelector('button[type="submit"]');
const errorTexts = document.querySelectorAll(".error-text");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const { isError } = dateIsValid(dayInputEl, monthInputEl, yearInputEl);
});

const errorMessages = {
  isEmpty: "This field is required",
  isInvalid: {
    invalidDay: "Must be a valid day.",
    invalidMonth: "Must be a valid month",
    invalidYear: "Must be in the past",
  },
};
