/**
 * Verifica se três lados formam um triângulo válido.
 * @param {number} a - Lado 1
 * @param {number} b - Lado 2
 * @param {number} c - Lado 3
 * @returns {boolean}
 */
function isTriangle(a, b, c) {
  ok = 1;

  if (!((a + b) > c)) ok *= 0;
  if (!((b + c) > a)) ok *= 0;
  if (!((a + c) > b)) ok *= 0;
  
  return !!ok;
}

function main() {
  const tests = [
    { params: [3, 4, 5], expected: true },
    { params: [1, 1, 10], expected: false },
    { params: [5, 5, 5], expected: true },
    { params: [10, 2, 7], expected: false },
    { params: [7, 10, 5], expected: true },
    { params: [1, 2, 3], expected: false },
  ];

  for (let test of tests) {
    const result = isTriangle(...test.params);
    if (result !== test.expected) {
      console.error(
        `❌ Test [${test.params}]: Failed (Expected ${test.expected}, got ${result})`,
      );
      return;
    }
  }
  console.log("✅ All tests passed!.");
}

main();
