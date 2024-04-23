const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);