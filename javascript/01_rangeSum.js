/**
 * Calcula o somatório de um intervalo fechado [a, b].
 * @param {number} a - Limite inferior
 * @param {number} b - Limite superior
 * @returns {number} - Soma total (BigInt para evitar overflow em JS se necessário)
 */
function rangeSum(a, b) {
  if (a > b) return 0;

  return ((a + b) * (b + 1 - a)) / 2;
}

function main() {
  const tests = [
    { title: "Standard range", params: [1, 10], expected: 55 },
    { title: "Single element", params: [5, 5], expected: 5 },
    { title: "Inverted range", params: [10, 1], expected: 0 },
    { title: "Negative to positive", params: [-3, 3], expected: 0 },
    { title: "Large range", params: [1, 100], expected: 5050 },
    { title: "Zero start", params: [0, 10], expected: 55 },
    { title: "Negative range", params: [-10, -5], expected: -45 },
    { title: "Start at 1", params: [1, 1000], expected: 500500 },
    { title: "Identical negative", params: [-1, -1], expected: -1 },
    { title: "Small gap", params: [1, 2], expected: 3 },
  ];

  const len = tests.length;
  for (let i = 0; i < len; i++) {
    const { title, params, expected } = tests[i];
    const result = rangeSum(...params);

    if (result !== expected) {
      console.error(
        `❌ ${title}: Failed (Expected ${expected}, got ${result})`,
      );
      return;
    }
  }

  console.log(
    "✅ All tests passed! Complexity O(1) confirmed? Submit your code.",
  );
}

main();
