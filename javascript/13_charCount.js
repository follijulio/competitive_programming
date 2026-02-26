/**
 * Conta a frequência de cada caractere na string.
 * @param {string} s - A string de entrada.
 * @returns {object} - Objeto com as contagens.
 */
function countCharacters(s) {
  let contagem = {};

  for (let i = 0; i < s.length; i++) {
    if (contagem[s[i]]) {
      contagem[s[i]] = contagem[s[i]] + 1;
    } else {
      contagem[s[i]] = 1;
    }
  }
  return contagem;
}

function main() {
  const tests = [
    { s: "ovo", expected: { o: 2, v: 1 } },
    { s: "banana", expected: { b: 1, a: 3, n: 2 } },
    { s: "", expected: {} },
    { s: "aa", expected: { a: 2 } },
  ];

  for (let test of tests) {
    const result = countCharacters(test.s);
    if (JSON.stringify(result) !== JSON.stringify(test.expected)) {
      console.error(`❌ Test "${test.s}": Failed`, result);
      return;
    }
  }
  console.log(
    "✅ All tests passed!",
  );
}

main();
