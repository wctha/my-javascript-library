const flattenedArray = arr => [].concat(...arr);
const randomBoolean = () => Math.random() >= 0.5;
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');