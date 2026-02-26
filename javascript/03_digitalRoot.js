/**
 * Calcula a raiz digital de n em O(1) usando aritmética modular.
 * @param {number} n - O número natural de entrada.
 * @returns {number} - O dígito único final (0 a 9).
 */
function digitalRoot(n) {
  if(n == 0) return 0

  return ((n-1) % 9) + 1
}

function main() {
  const tests = [
    { title: "Standard case", params: [38], expected: 2 },
    { title: "Zero case", params: [0], expected: 0 },
    { title: "Multiple of nine", params: [18], expected: 9 },
    { title: "Nine itself", params: [9], expected: 9 },
    { title: "Single digit", params: [5], expected: 5 },
    { title: "Large number", params: [12345], expected: 6 },
    { title: "Power of 10", params: [1000000000], expected: 1 },
    { title: "All nines", params: [9999], expected: 9 },
    { title: "Random large", params: [8675309], expected: 2 },
    { title: "Step before 9", params: [17], expected: 8 },
  ];

  const len = tests.length;
  for (let i = 0; i < len; i++) {
    const { title, params, expected } = tests[i];
    const result = digitalRoot(...params);

    if (result !== expected) {
      console.error(
        `❌ ${title}: Failed (Expected ${expected}, got ${result})`,
      );
      return;
    }
  }

  console.log("✅ All tests passed!");
}

main();
