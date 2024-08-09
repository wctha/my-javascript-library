function myAPITS(someString: string, someNum: number) { ... };
console.log("1 && 2 = "+(1 && 2));
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));