const symbolsPath = path.join(buildOutputPath, 'symbols');
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);