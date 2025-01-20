function imprimirSoma(a, b) {
  return a + b;
}
console.log(imprimirSoma(1, 2));

const imprimirSubtracao = function (a, b) {
  console.log(a - b);
};
imprimirSubtracao(5, 1);

// Função arrow
const multiplica = (a, b) => {
  console.log(a * b);
};
multiplica(2, 5);
