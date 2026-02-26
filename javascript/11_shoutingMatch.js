/**
 * Transforma o array de strings para maiúsculas com exclamação.
 * @param {string[]} palavras - Array original.
 * @returns {string[]} - Array transformado.
 */
function shout(palavras) {
  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = palavras[i].toUpperCase().concat("!");
  }
  return palavras;
}

function main() {
  const tests = [
    { input: ["cafe", "pao"], expected: ["CAFE!", "PAO!"] },
    { input: ["uau"], expected: ["UAU!"] },
    { input: [], expected: [] },
    { input: ["a", "b", "c"], expected: ["A!", "B!", "C!"] },
    { input: ["js"], expected: ["JS!"] },
  ];

  for (let test of tests) {
    const result = shout(test.input);
    const pass = JSON.stringify(result) === JSON.stringify(test.expected);
    if (!pass) {
      console.error(`❌ Test Failed: Expected ${test.expected}, got ${result}`);
      return;
    }
  }
  console.log("✅ All tests passed!");
}

main();
