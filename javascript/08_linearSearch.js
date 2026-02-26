/**
 * Realiza uma busca linear no array.
 * @param {number[]} arr - O array de números.
 * @param {number} target - O valor a ser encontrado.
 * @returns {number} - O índice ou -1.
 */
function findIndex(arr, target) {
  return arr.indexOf(target);
}

function main() {
  const tests = [
    {
      title: "Value in middle",
      params: [[10, 20, 30, 40, 50], 30],
      expected: 2,
    },
    { title: "Value at start", params: [[5, 1, 2], 5], expected: 0 },
    { title: "Value at end", params: [[9, 8, 7], 7], expected: 2 },
    { title: "Not found", params: [[1, 2, 3], 99], expected: -1 },
    { title: "Empty array", params: [[], 10], expected: -1 },
    { title: "Negative numbers", params: [[-1, -5, 0], -5], expected: 1 },
    { title: "Duplicates (first index)", params: [[2, 4, 2], 2], expected: 0 },
    { title: "Single element found", params: [[100], 100], expected: 0 },
    { title: "Single element not found", params: [[100], 101], expected: -1 },
    { title: "Large number match", params: [[1000000], 1000000], expected: 0 },
  ];

  for (let test of tests) {
    const result = findIndex(...test.params);
    if (result !== test.expected) {
      console.error(
        `❌ ${test.title}: Failed (Expected ${test.expected}, got ${result})`,
      );
      return;
    }
  }
  console.log("✅ All tests passed!");
}

main();
