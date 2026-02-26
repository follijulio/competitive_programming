/**
 * Classifica o número com base na divisibilidade por 3 e 5.
 * @param {number} n - O número de entrada.
 * @returns {string} - O resultado da classificação.
 */
function fizzBuzz(n) {
  let result = "";

  if (n % 3 == 0) {
    result += "Fizz";
  }

  if (n % 5 == 0) {
    result += "Buzz";
  }

  if (n % 3 !== 0 && n % 5 !== 0) {
    return n.toString();
  }

  return result;
}

function main() {
  const tests = [
    { n: 15, expected: "FizzBuzz" },
    { n: 3, expected: "Fizz" },
    { n: 5, expected: "Buzz" },
    { n: 7, expected: "7" },
    { n: 30, expected: "FizzBuzz" },
    { n: 9, expected: "Fizz" },
    { n: 10, expected: "Buzz" },
    { n: 2, expected: "2" },
    { n: 0, expected: "FizzBuzz" }, // 0 é divisível por qualquer número
    { n: -3, expected: "Fizz" },
  ];

  for (let test of tests) {
    const result = fizzBuzz(test.n);
    if (result !== test.expected) {
      console.error(
        `❌ Test n=${test.n}: Failed (Expected ${test.expected}, got ${result})`,
      );
      return;
    }
  }
  console.log("✅ All tests passed!");
}

main();
