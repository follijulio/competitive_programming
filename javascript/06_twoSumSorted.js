/**
 * Encontra dois índices no array ordenado cuja soma resulta no alvo.
 * @param {number[]} numbers - Array ordenado de forma não-decrescente.
 * @param {number} target - O valor da soma desejada.
 * @returns {number[]} - Um array com os dois índices [i, j].
 */
function twoSumSorted(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && i != j) return [i, j];
    }
  }
  return [];
}

function main() {
  const tests = [
    { title: "Standard case", params: [[2, 7, 11, 15], 9], expected: [0, 1] },
    { title: "Small array", params: [[2, 3, 4], 6], expected: [0, 2] },
    { title: "Negative target", params: [[-1, 0], -1], expected: [0, 1] },
    {
      title: "Negative elements",
      params: [[-5, -2, -1, 3], -2],
      expected: [0, 3],
    },
    { title: "Zero target", params: [[-3, 3, 4, 9], 0], expected: [0, 1] },
    {
      title: "Consecutive elements",
      params: [[1, 2, 3, 4, 5, 6], 11],
      expected: [4, 5],
    },
    { title: "Wide gap", params: [[1, 10, 20, 30, 40], 50], expected: [1, 4] },
    { title: "Same elements", params: [[5, 5, 10], 10], expected: [0, 1] },
  ];

  const len = tests.length;
  for (let k = 0; k < len; k++) {
    const { title, params, expected } = tests[k];
    const result = twoSumSorted(...params);

    // Verificando igualdade profunda de arrays
    if (!result || result[0] !== expected[0] || result[1] !== expected[1]) {
      console.error(
        `❌ ${title}: Failed (Expected [${expected}], got [${result}])`,
      );
      return;
    }
  }

  console.log(
    "✅ All tests passed! A técnica dos dois ponteiros é sua mais nova arma.",
  );
}

main();
