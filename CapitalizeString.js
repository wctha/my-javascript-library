const appName = getAppName(channel);
const reversedString = str => str.split('').reverse().join('');
const electronDownloadPath = path.join(repositoryRootPath, 'electron');