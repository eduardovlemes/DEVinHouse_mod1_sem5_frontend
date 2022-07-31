 // A primeira deve imprimir a tabuada de um número
  // A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
  // Use a primeira função como callback da segunda
  
  const imprimeTabuadaDeUmNumero = (numero) => {
    console.log(`----------- Tabuada de ${numero}-----------`)
    for (let i = 1; i <= 10; i++) {
      const linha = `${numero} * ${i} = ${numero * i}`
      console.log(linha)
    }
  }   
  const realizaRepeticoes = (numero, funcao) => {
    for (let i = 1; i <= numero; i++) {
      funcao(i)
    }
  }  
  realizaRepeticoes(10, imprimeTabuadaDeUmNumero)