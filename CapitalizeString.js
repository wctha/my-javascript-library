const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const repositoryRootPath = path.resolve(__dirname, '..');
function myAPITS(someString: string, someNum: number) { ... };
const results = await Promise.all(resultingPromises);