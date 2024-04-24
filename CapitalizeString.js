const average = arr => arr.reduce((a, b) => a + b) / arr.length;
var arr3 = "jones".split('');
console.log(+"1" +  "1" + "2");
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const currentDate = () => new Date().toLocaleDateString('en-US');