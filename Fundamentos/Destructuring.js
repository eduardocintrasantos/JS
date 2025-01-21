const pessoa = {
    nome: 'Eduardo',
    idade: 29,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bomHumorado = true} = pessoa
console.log(sobrenome, bomHumorado)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

// Array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)