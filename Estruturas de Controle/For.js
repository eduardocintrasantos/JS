for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (i = 0; i < notas.length; i++) {
  console.log(`Nota ${i + 1} = ${notas[i]}`);
}

for (i in notas) {
  console.log(`Nota_ ${i} = ${notas[i]}`);
}
