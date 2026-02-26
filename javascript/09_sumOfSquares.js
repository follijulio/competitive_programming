/**
 * Calcula a soma dos quadrados de 1 até n.
 * @param {number} n - O limite superior.
 * @returns {number} - O resultado da soma.
 */
function sumOfSquares(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}

function main() {
  const tests = [
    { n: 3, expected: 14 },
    { n: 1, expected: 1 },
    { n: 5, expected: 55 },
    { n: 10, expected: 385 },
    { n: 2, expected: 5 },
    { n: 0, expected: 0 },
    { n: 4, expected: 30 },
    { n: 6, expected: 91 },
    { n: 20, expected: 2870 },
    { n: 100, expected: 338350 },
  ];

  for (let test of tests) {
    const result = sumOfSquares(test.n);
    if (result !== test.expected) {
      console.error(
        `❌ Test n=${test.n}: Failed (Expected ${test.expected}, got ${result})`,
      );
      return;
    }
  }
  console.log("✅ All tests passed!'");
}

main();
