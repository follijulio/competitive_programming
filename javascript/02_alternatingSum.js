/**
 * Calcula a soma alternada de 1 até n.
 * @param {number} n - O limite superior da soma.
 * @returns {number} - O resultado da soma alternada.
 */
function alternatingSum(n) {
  if (n % 2 == 0) return n / 2;

  return (n+1) / 2 * -1;
}

function main() {
  const tests = [
    { title: "Small odd", n: 3, expected: -2 },
    { title: "Small even", n: 4, expected: 2 },
    { title: "Unit case", n: 1, expected: -1 },
    { title: "Ten case", n: 10, expected: 5 },
    { title: "Medium odd", n: 15, expected: -8 },
    { title: "Medium even", n: 20, expected: 10 },
    { title: "Power of 2", n: 1024, expected: 512 },
    { title: "Nine case", n: 9, expected: -5 },
    { title: "Large even limit", n: 1000000000, expected: 500000000 },
    { title: "Large odd limit", n: 999999999, expected: -500000000 },
  ];

  for (let i = 0; i < tests.length; i++) {
    const { title, n, expected } = tests[i];
    const result = alternatingSum(n);

    if (result !== expected) {
      console.error(
        `❌ ${title}: Failed (Expected ${expected}, got ${result})`,
      );
      return;
    }
  }

  console.log(
    "✅ All tests passed!",
  );
}

main();
