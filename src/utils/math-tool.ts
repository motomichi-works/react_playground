/* eslint-disable import/prefer-default-export */

export const getPrimes = (maxRange: number): number[] => {
  const numbers = [...Array(maxRange + 1).keys()].slice(2);

  const primes = numbers.filter((n) => {
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }

    return true;
  });

  return primes as number[];
};
