// Crie uma função que retorne a string "Olá, " contatenada com um arqgumento text.
function ola(nome) {
  console.log(`Olá, ${nome}!`);
}
ola("Eduardo");
ola("Maria");

// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias
function idadeEmDias(idade) {
  console.log(`${idade} anos em dias, é igual a ${idade * 365} dias de idade.`);
}
idadeEmDias(25);

// Desenvolva uma função que recebe dois parametros, um é a quantidade de horas trabalhadas no mes, e quanto o funcionario recebe por hora.
function salario(horas, salario) {
  console.log(`Salário igual a R$${horas * salario}.`);
}
salario(150, 40.5);

// Crie uma função que recebe um numero de 1 a 12, e retorne o mes correspondente como uma string.
function mes(mes) {
  switch (mes) {
    case 1:
      console.log("Jan.");
      break;
    case 2:
      console.log("Fev.");
      break;
    case 3:
      console.log("Mar.");
      break;
    case 4:
      console.log("Abr.");
      break;
    case 5:
      console.log("Mai.");
      break;
    case 6:
      console.log("Jun.");
      break;
    case 7:
      console.log("Jul.");
      break;
    case 8:
      console.log("Ago.");
      break;
    case 9:
      console.log("Set.");
      break;
    case 10:
      console.log("Out.");
      break;
    case 11:
      console.log("Nov.");
      break;
    case 12:
      console.log("Dez.");
      break;
  }
}
mes(4);

// Crie um afunção que receba dois numeros e retorne se o primeiro é maior ou igual o segundo;
