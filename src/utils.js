// Get random int from a range from MIN to MAX, exactly
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export default getRandomInt;
