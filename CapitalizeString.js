const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());