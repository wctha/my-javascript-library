const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const executableName = getExecutableName(channel, appName);
const apmRootPath = path.join(repositoryRootPath, 'apm');