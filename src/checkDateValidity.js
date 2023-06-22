const DATE = new Date();
let CURRYEAR = DATE.getFullYear();

function dateIsValid(dayInputEl, monthInputEl, yearInputEl) {
  const dayValue = Number(dayInputEl.value);
  const monthValue = Number(monthInputEl.value);
  const yearValue = Number(yearInputEl.value);

  let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let total_days = 0;

  // Adjust for leap years
  if (yearValue % 400 == 0 || (yearValue % 100 != 0 && yearValue % 4 == 0))
    monthLength[1] = 29;

  let isError = {
    dayHasError: false,
    monthHasError: false,
    yearHasError: false,
  };

  //   console.log("total_days = " + total_days);

  // check for invalid year
  if (!(yearInputEl.value.length == 4 && yearValue > 1900 && yearValue < CURRYEAR)) {
    isError.yearHasError = true;
  }

  // check for invalid month
  if (!(monthValue > 0 && monthValue < 13)) {
    isError.monthHasError = true;
    total_days = monthLength[0];
  } else {
    total_days = monthLength[monthValue - 1];
  }

  // check for invalid days
  if (!(dayValue > 0 && dayValue <= total_days)) {
    isError.dayHasError = true;
  }

  return {
    isError,
  };
}

export default dateIsValid;
