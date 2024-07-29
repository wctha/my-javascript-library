const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const removeDuplicates = (arr) => [...new Set(arr)];
const uniqueArr = (arr) => [...new Set(arr)];