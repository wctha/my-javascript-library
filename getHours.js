console.log(1 +  +"2" + "2");
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const reversedString = str => str.split('').reverse().join('');
const removeDuplicates = (arr) => [...new Set(arr)];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const value = ( 5 < 7 ) ? "True" : "False" ;