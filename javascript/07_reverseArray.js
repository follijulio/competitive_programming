/**
 * Inverte um array no próprio espaço de memória (in-place).
 * @param {any[]} arr - O array a ser invertido.
 * @returns {any[]} - O mesmo array, agora invertido.
 */
function reverseArray(arr) {
  let l = 0;
  let r = arr.length - 1;
  
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];

    r--;
    l++;
  }

  return arr;
}

function main() {
  const tests = [
    { title: "Even length", params: [[1, 2, 3, 4]], expected: [4, 3, 2, 1] },
    {
      title: "Odd length",
      params: [["h", "e", "l", "l", "o"]],
      expected: ["o", "l", "l", "e", "h"],
    },
    { title: "Single element", params: [[99]], expected: [99] },
    { title: "Two elements", params: [[1, 0]], expected: [0, 1] },
    { title: "Empty array", params: [[]], expected: [] },
    {
      title: "Strings",
      params: [["Alice", "Bob", "Charlie"]],
      expected: ["Charlie", "Bob", "Alice"],
    },
    {
      title: "Booleans",
      params: [[true, false, false]],
      expected: [false, false, true],
    },
  ];

  const len = tests.length;
  for (let k = 0; k < len; k++) {
    const { title, params, expected } = tests[k];

    // Passamos uma cópia rasa para a função para não alterar o params original dos testes
    const inputCopy = [...params[0]];
    const result = reverseArray(inputCopy);

    // Verificação de igualdade de arrays
    const isPass =
      result &&
      result.length === expected.length &&
      result.every((val, index) => val === expected[index]);

    if (!isPass) {
      console.error(
        `❌ ${title}: Failed (Expected [${expected}], got [${result}])`,
      );
      return;
    }
  }

  console.log(
    "✅ All tests passed! O fundamento dos Dois Ponteiros está consolidado.",
  );
}

main();
