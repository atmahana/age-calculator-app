import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./src/counter.js";

document.querySelector("#app").innerHTML = `
Day
DD

Month
MM

Year
YYYY

-- years
-- months
-- days
`;

setupCounter(document.querySelector("#counter"));
