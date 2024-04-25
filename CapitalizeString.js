const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const arrayContains = (arr, element) => arr.includes(element);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const updated = numbers.filter(element => element > 6);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);