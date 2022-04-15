const cinemaSeatAllocation = (N, S) => {
  const reservedSeats = S.split(' ');
  let maxFamilies = 2 * N;
  let decremented = 0;

  for (let i = 1; i <= N; i++) {
    if (
      reservedSeats.includes(`${i}B`) ||
      reservedSeats.includes(`${i}C`) ||
      reservedSeats.includes(`${i}D`) ||
      reservedSeats.includes(`${i}E`)
    ) {
      decremented++;
      maxFamilies--;
    }

    if (
      reservedSeats.includes(`${i}F`) ||
      reservedSeats.includes(`${i}G`) ||
      reservedSeats.includes(`${i}H`) ||
      reservedSeats.includes(`${i}J`)
    ) {
      decremented++;
      maxFamilies--;
    }

    if (
      !reservedSeats.includes(`${i}D`) &&
      !reservedSeats.includes(`${i}E`) &&
      !reservedSeats.includes(`${i}F`) &&
      !reservedSeats.includes(`${i}G`) &&
      decremented === 2
    ) {
      maxFamilies++;
    }
  }

  return maxFamilies;
};

console.log(cinemaSeatAllocation(2, '1A 2F 1C'));
