// Get random int from a range from MIN to MAX, exactly
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// calculate GCD for pair of numbers
export const calculateGCD = (a, b) => (!b ? a : calculateGCD(b, a % b));
