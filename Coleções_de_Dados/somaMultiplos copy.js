const sumMultiples = (limit) => {
  const numbers = Array.from({ length: limit }, (_, index) => index); // Cria um array de 0 a limit - 1
  const multiplesOf3 = numbers.filter(number => number % 3 === 0); // Filtra os múltiplos de 3
  const multiplesOf5 = numbers.filter(number => number % 5 === 0); // Filtra os múltiplos de 5

  const sumOfMultiples = arr => arr.reduce((acc, curr) => acc + curr, 0); // Função para somar elementos do array

  const sum3 = sumOfMultiples(multiplesOf3);
  const sum5 = sumOfMultiples(multiplesOf5);

  return sum3 + sum5;
};

const limit = 1000;
const result = sumMultiples(limit);
console.log(`A soma dos múltiplos de 3 e 5 menores que ${limit} é: ${result}`);
