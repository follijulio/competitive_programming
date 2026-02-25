/**
 * Encontra o número ausente em um array contendo números de 0 a n.
 * @param {number[]} nums - Array de números distintos.
 * @returns {number} - O número ausente.
 */
function missingNumber(nums) {
  const n = nums.length;

  const expectedSum = ((n + 1) * n) / 2;

  let realSum = 0;

  for (i of nums) {
    realSum += i;
  }
  return expectedSum - realSum;
}

function main() {
  const tests = [
    { title: "Standard gap", params: [[3, 0, 1]], expected: 2 },
    { title: "Missing last", params: [[0, 1]], expected: 2 },
    { title: "Missing first", params: [[1, 2]], expected: 0 },
    {
      title: "Large scrambled",
      params: [[9, 6, 4, 2, 3, 5, 7, 0, 1]],
      expected: 8,
    },
    { title: "Single element (0)", params: [[0]], expected: 1 },
    { title: "Single element (1)", params: [[1]], expected: 0 },
    { title: "Missing middle", params: [[0, 1, 2, 4, 5]], expected: 3 },
    { title: "Larger continuous", params: [[5, 0, 2, 1, 4]], expected: 3 },
  ];

  const len = tests.length;
  for (let i = 0; i < len; i++) {
    const { title, params, expected } = tests[i];
    const result = missingNumber(...params);

    if (result !== expected) {
      console.error(
        `❌ ${title}: Failed (Expected ${expected}, got ${result})`,
      );
      return;
    }
  }

  console.log("✅ All tests passed! O domínio do espaço O(1) continua.");
}

main();
