//Crie uma arrow function que recebe um array de números e calcula a média deles
  const media = (array) => {
    let soma = 0;
    for (let numero of array) {
      soma += numero;
    }
    return soma / array.length
  }
  
  console.log(media([1,2,3,4,5])) // 3