const isWeekday = (date) => date.getDay() % 6 !== 0;
const flattenedArray = arr => [].concat(...arr);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));