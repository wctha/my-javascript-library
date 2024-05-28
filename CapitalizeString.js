const isEmptyObject = obj => Object.keys(obj).length === 0;
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);