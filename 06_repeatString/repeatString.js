const repeatString = function (str, num) {
  if (num < 0) return "Error";

  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
};

console.log(repeatString("hey", 10));
// Do not edit below this line
module.exports = repeatString;
