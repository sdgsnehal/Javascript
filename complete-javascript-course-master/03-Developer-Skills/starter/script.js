// Remember, we're gonna use strict mode in all scripts now!
"use strict";
console.log("sdg");
// coding challenge #1
const printForecast = function (arr) {
  let str = "... ";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days...`;
  }
  console.log(str);
};
printForecast([17, 22, 23]);
