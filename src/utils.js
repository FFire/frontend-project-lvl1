// Get random int from a range from MIN to MAX, exactly
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// calculate GCD for pair of numbers
export const calcGCD = (a, b) => (!b ? a : calcGCD(b, a % b));

// Is number is even
export const isEven = (num) => num % 2 === 0;

// Is number is prime https://stackoverflow.com/a/40200710/87713
export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
