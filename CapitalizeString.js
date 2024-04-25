const merge = (a, b) => a.concat(b);
console.log(1 +  -"1" + "2");
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;