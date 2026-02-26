/**
 * Converte graus Celsius para Fahrenheit.
 * @param {number} celsius - Temperatura em C.
 * @returns {number} - Temperatura em F.
 */
function toFahrenheit(celsius) {
  return (celsius * 5) / 9 + 32;
}

function main() {
  const tests = [
    { c: 0, expected: 32 },
    { c: 100, expected: 212 },
    { c: -40, expected: -40 }, // Curiosidade: o ponto onde as escalas se cruzam
    { c: 25, expected: 77 },
    { c: 37, expected: 98.6 },
  ];

  for (let test of tests) {
    const result = toFahrenheit(test.c);
    if (result !== test.expected) {
      console.error(
        `❌ Test ${test.c}C: Failed (Expected ${test.expected}F, got ${result}F)`,
      );
      return;
    }
  }
  console.log(
    "✅ All tests passed!",
  );
}

main();
