const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;