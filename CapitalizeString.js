const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
var arr1 = "john".split('');
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));