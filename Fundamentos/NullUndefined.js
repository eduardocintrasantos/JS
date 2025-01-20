const a = { nome: "Eduardo" };
console.log(a);

const b = a;
console.log(b);

b.nome = "Cintra";
console.log(a);
/* A constante a não armazena o valor e sim onde essa informação está na memoria.. e o b recebeu essa informação
então alterando o b, ele esta alterando o valor na memoria, alterando também o que é buscado pela variavel a 
Isso acontece porque a é um objeto..
*/

let c = 3;
let d = c;
d++;
console.log(c);
console.log(d);
/* Quando é um tipo primitivo, ele copia o valor, e não passa a referencia como quando é feito com obj, funções.. */

let valor;
console.log(valor); // undefined pois não foi atribuido nenhum valor a variavel, foi declarada mas não foi inicializada

let valor2 = null; // ausencia de valor, a variavel foi inicializada, mas não aponta para nenhum obj na memoria
