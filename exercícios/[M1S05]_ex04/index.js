// Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos
const numerosPositivos = (arrayDeNumeros) => {
    let numerosPositivos = [];
    for (let numero of arrayDeNumeros) {
      if (numero >= 0) {
        numerosPositivos.push(numero);
      }
    }
    return numerosPositivos
  }
  
  const numerosPositivos2 = (arrayDeNumeros) => arrayDeNumeros.filter(numero => numero >= 0)
  
  console.log(numerosPositivos([-5, 10, -3.2, 12, -9, 5, 90, 0, 1, 4.5]))