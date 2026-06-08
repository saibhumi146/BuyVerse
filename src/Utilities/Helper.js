export function nthPrime(n) {
  if (n < 1) return null;
  let count = 0;
  let num = 1;

  while (count < n) {
    num += 1;
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count += 1;
    }
  }

  return num;
}
