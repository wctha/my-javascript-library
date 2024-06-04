const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;