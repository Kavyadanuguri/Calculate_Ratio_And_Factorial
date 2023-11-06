const path1 = require("../factorial/index");
const path2 = require("../ratio/index");

const ratioAndFactorial = (a, b, c) => {
  const ratio = path2(a, b);
  const factorial = path1(c);
  return {
    ratio,
    factorial,
  };
};

module.exports = ratioAndFactorial;
