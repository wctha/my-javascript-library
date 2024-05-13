var c = new Counter(); c.add(); c.add(); c.add();
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));