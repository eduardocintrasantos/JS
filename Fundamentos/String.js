const nome = "Eduardo";

console.log(nome.charAt(4));
console.log(nome.charAt(10)); //Não é retornado um erro, ele retorna vazio
console.log(nome.charCodeAt(3)); //Retorna o valor na tabela unicode
console.log(nome.indexOf("o"));

console.log(nome.substring(1));
console.log(nome.substring(0, 3));

console.log("Nome ".concat(nome).concat("."));
console.log(nome.replace("a", "A"));

console.log("Eduaro,Cintra,Santos".split(","));

// Template String
console.log(`Olá ${nome}.`);
console.log(`1 + 1 = ${1 + 1}`);
