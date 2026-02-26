/**
 * Filtra números > 10 e eleva-os ao quadrado.
 * @param {number[]} nums - Array original.
 * @returns {number[]} - Array processado.
 */
function processNumbers(nums) {
  return nums
    .filter((a) => a > 10)
    .map((a) => {
      return a * a;
    });
}

function main() {
  const tests = [
    { input: [5, 12, 8, 15], expected: [144, 225] },
    { input: [10, 11], expected: [121] },
    { input: [1, 2, 30], expected: [900] },
    { input: [], expected: [] },
    { input: [0, -5, 20], expected: [400] },
  ];

  for (let test of tests) {
    const result = processNumbers(test.input);
    if (JSON.stringify(result) !== JSON.stringify(test.expected)) {
      console.error(`❌ Test failed: Expected ${test.expected}, got ${result}`);
      return;
    }
  }
  console.log("✅ All tests passed!");
}

main();
