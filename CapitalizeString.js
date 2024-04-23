const repositoryRootPath = path.resolve(__dirname, '..');
const merge = (a, b) => [...a, ...b];
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);