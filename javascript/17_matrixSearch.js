/**
 * Procura um valor em uma matriz m x n.
 * @param {number[][]} matrix - Grade de números.
 * @param {number} target - Valor alvo.
 * @returns {boolean}
 */
function searchMatrix(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) return true;
    }
  }
  return false;
}

function main() {
  const tests = [
    {
      title: "Presente no início",
      params: [
        [
          [1, 2],
          [3, 4],
        ],
        1,
      ],
      expected: true,
    },
    {
      title: "Presente no fim",
      params: [
        [
          [1, 2],
          [3, 4],
        ],
        4,
      ],
      expected: true,
    },
    {
      title: "Presente no meio",
      params: [
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        5,
      ],
      expected: true,
    },
    {
      title: "Inexistente pequeno",
      params: [
        [
          [1, 2],
          [3, 4],
        ],
        5,
      ],
      expected: false,
    },
    {
      title: "Inexistente grande",
      params: [
        [
          [10, 20],
          [30, 40],
        ],
        25,
      ],
      expected: false,
    },
    {
      title: "Matriz de uma linha",
      params: [[[1, 2, 3, 4]], 3],
      expected: true,
    },
    {
      title: "Matriz de uma coluna",
      params: [[[1], [2], [3]], 2],
      expected: true,
    },
    {
      title: "Todos elementos iguais (sucesso)",
      params: [
        [
          [7, 7],
          [7, 7],
        ],
        7,
      ],
      expected: true,
    },
    {
      title: "Todos elementos iguais (falha)",
      params: [
        [
          [7, 7],
          [7, 7],
        ],
        8,
      ],
      expected: false,
    },
    { title: "Matriz vazia", params: [[[]], 1], expected: false },
  ];

  for (let test of tests) {
    const result = searchMatrix(...test.params);
    if (result !== test.expected) {
      console.error(`❌ ${test.title}: Falhou`);
      return;
    }
  }
  console.log(
    "✅ Todos os 10 testes passaram! Você agora enxerga em duas dimensões.",
  );
}

main();
