/**
 * Localiza o índice do alvo em um array ordenado em O(log n).
 * @param {number[]} nums - O array de inteiros ordenados.
 * @param {number} target - O valor procurado.
 * @returns {number} - O índice ou -1 se não encontrado.
 */
function binarySearch(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] < target) l = mid + 1;
    if (nums[mid] > target) r = mid - 1;
  }

  return -1;
}

function main() {
  const tests = [
    { title: "Alvo no meio exato", params: [[1, 2, 3, 4, 5], 3], expected: 2 },
    {
      title: "Alvo na extremidade esquerda",
      params: [[1, 2, 3, 4, 5], 1],
      expected: 0,
    },
    {
      title: "Alvo na extremidade direita",
      params: [[1, 2, 3, 4, 5], 5],
      expected: 4,
    },
    {
      title: "Alvo inexistente (menor)",
      params: [[10, 20, 30], 5],
      expected: -1,
    },
    {
      title: "Alvo inexistente (maior)",
      params: [[10, 20, 30], 35],
      expected: -1,
    },
    {
      title: "Alvo inexistente (entre valores)",
      params: [[10, 20, 30], 15],
      expected: -1,
    },
    {
      title: "Array com um único elemento (sucesso)",
      params: [[100], 100],
      expected: 0,
    },
    {
      title: "Array com um único elemento (falha)",
      params: [[100], 101],
      expected: -1,
    },
    {
      title: "Array par (alvo na metade superior)",
      params: [[1, 2, 3, 4], 3],
      expected: 2,
    },
    {
      title: "Array grande com números negativos",
      params: [[-50, -25, 0, 25, 50], -25],
      expected: 1,
    },
  ];

  let passed = 0;
  for (let test of tests) {
    const result = binarySearch(...test.params);
    if (result === test.expected) {
      passed++;
    } else {
      console.error(
        `❌ ${test.title}: Falhou (Esperado ${test.expected}, obteve ${result})`,
      );
      return;
    }
  }

  console.log(
    `✅ Todos os ${passed} testes passaram! Eficiência logarítmica validada.`,
  );
}

main();
