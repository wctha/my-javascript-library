const apmRootPath = path.join(repositoryRootPath, 'apm');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());