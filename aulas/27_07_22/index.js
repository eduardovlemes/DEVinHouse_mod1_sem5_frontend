//---- Exercício 2 ---- Utilize o if ternário para construir uma função que recebe o número de dias e retorna se o número pertence a primeira ou a segunda quinzena.

let retornaQuinzena = numero => numero >= 1 && numero <= 15 ? "Primeira Quinzena": "Segunda Quinzena"
console.log(retornaQuinzena(20))


//----- Exercício 3 ----- Crie uma arrow function que receba um array e localize o número de maior valor
/* let array = [10,20,30,40,50]
const localizarMaiorValor = (array = []) => {
    var maior = array[0]
    array.forEach(item =>{
        if(item>maior){
            maior=item
        }
    })
    return maior
}
console.log(`O maior valor é ${localizarMaiorValor(array)}`) */

let numeros = [1,78,4,5,6,7,9];
const maiorValor = (array=[]) => numeros.reduce((maior,menor) => maior > menor ? maior : menor);
console.log(maiorValor(numeros))


//----- Exercício 4 ----- Crie uma arrow function que receba 2 arrays e retorne um array contendo os dois
var array1 = [-10, -20, -30, -120, -1000];
var array2 = ['Silas', 'Glauco', 'Andre', 'Astor', 'Felipe', 'Eduardo', 'Kayra'];
const juntarArrays = (lista1=[], lista2=[]) => lista1.concat(lista2)
console.log(juntarArrays(array1, array2));

//----- Exercício 5 ----- Crie uma arrow functions que ordena um array de números
let array = [19,50,2,1,99]
const ordenaArray = (array=[]) => array.sort((a,b)=>a-b)
console.log(ordenaArray(array))

//----- Exercício 6 ----- Crie uma arrow function que receba um número, calcule sua raiz quadrada e retorne um número inteiro positivo como resultado

const calcularRaizQuadrada = numero => {
    if (numero<0){
        return "Numero invalido."
    } else {
        let raiz = Math.sqrt(numero)
        return Math.trunc(raiz)
    }
}
console.log(calcularRaizQuadrada(9))
console.log(calcularRaizQuadrada(-9))