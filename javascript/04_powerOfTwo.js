/**
 * Verifica se um número é potência de 2 usando operações bitwise.
 * @param {number} n - O número inteiro a ser verificado.
 * @returns {boolean} - true se n pertence a P, false caso contrário.
 */
function isPowerOfTwo(n) {
  if(n == 0) return false
  return !(n & (n - 1))
}

function main() {
  const tests = [
    { title: "Standard power", params: [16], expected: true },
    { title: "Not a power", params: [14], expected: false },
    { title: "Zero case", params: [0], expected: false },
    { title: "Unit case", params: [1], expected: true },
    { title: "Negative case", params: [-16], expected: false },
    { title: "Large power", params: [1073741824], expected: true }, // 2^30
    { title: "Large non-power", params: [1073741823], expected: false },
    { title: "Close to power", params: [3], expected: false },
    { title: "Another power", params: [256], expected: true },
    { title: "Power minus one", params: [255], expected: false },
  ];

  const len = tests.length;
  for (let i = 0; i < len; i++) {
    const { title, params, expected } = tests[i];
    const result = isPowerOfTwo(...params);

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
