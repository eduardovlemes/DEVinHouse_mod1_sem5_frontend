
// Exercício 1 - Crie uma função que recebe um array e devolve a maior String.
const estados = ['São Paulo', 'Rio de Janeiro', 'Santa Catarina', 'Paraná']

function maiorStrinfDoArray(array) {
    let maiorString = ''
    for (const item of array) {
        if (item.length > maiorString.length) {
            maiorString = item
        }        
    }
    return maiorString
}
console.log(maiorStrinfDoArray(estados))


// Crie uma função que recebe um array e devolve uma lista invertida.
/* function inverteArray (array){
    let arrayInvertido = []
    for (let i = array.length - 1; i >=0; i--) {
        arrayInvertido.push(array[i]);        
    }
    return arrayInvertido
}

const arrayDeNumeros = [1,2,3,4,5,6,7,8,9]
console.log(inverteArray(arrayDeNumeros)) */

function inverteArray(array) {
    let arrayInvertido = []
    let ultimaPosicaoDoArray = array.length - 1
    let primeiraPosicaoDoArray = 0
    for (let index = ultimaPosicaoDoArray; index >= primeiraPosicaoDoArray; index--) {
        let itemNaPosicaoAtual = array[index]
        arrayInvertido.push(itemNaPosicaoAtual)        
    }
    return arrayInvertido    
}
const arrayDeNumeros = [1,2,3,4,5,6,7,8,9]
console.log(inverteArray(arrayDeNumeros))

//