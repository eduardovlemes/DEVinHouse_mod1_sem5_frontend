/* Crie 2 funções, ambas recebem um número e retorna true ou false:
- a primeira  verifica se é par;
- a segunda verifica se é ímpar.

Em seguida crie uma função que recebe como parâmetros: um array de números e uma função callback.
Essa função principal deverá ser capaz de filtrar os números e retornar um array de números filtrados (independente de qual seja a função callback).

Dica: o filtro poderá ser de números ímpares ou pares. */

const verificaSeEPar = function(numero) {
   return numero % 2 === 0 ? true : false
  }
const filtraNumeros3 = function (numeros,funcaoDeCondicaoDeFiltro) {
    return numeros.filter(funcaoDeCondicaoDeFiltro)
  }
  
  console.log(filtraNumeros3([1,2,3,4,5,6,7,8,9,10], verificaSeEPar))