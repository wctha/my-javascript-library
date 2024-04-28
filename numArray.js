const getRandomBoolean = () => Math.random() >= 0.5;
const isArray = (arr) => Array.isArray(arr);
const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);