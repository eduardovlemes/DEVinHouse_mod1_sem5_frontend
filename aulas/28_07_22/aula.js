//ANTES ES6
// // Exemplos de EXPORTAÇÃO
// function funcaoB() {
//   console.log("Sou a função B");
// }

// funcaoC = function() {
//   console.log("Sou a função C");
// }

// // // === EXPORTANDO APENAS UMA FUNÇÃO
// // module.exports = funcaoB;

// // === EXPORTANDO MAIS DE UMA FUNÇÃO
// module.exports = {
//   funcaoB,
//   funcaoC
// }
// // ou
// module.exports = funcaoB;
// module.exports = funcaoC;

// // Exemplos de IMPORTAÇÃO

// // IMPORTANDO APENAS UMA FUNÇÃO
// const funcaoB = require('./funcoes.js')

// // IMPORTANDO MAIS DE UMA FUNÇÃO
// const { funcaoB, funcaoC } = require('./funcoes.js')
// // ou
// const funcaoB = require('./funcoes.js')
// const funcaoC = require('./funcoes.js')


// // USANDO AS FUNÇOES IMPORTADA
// function funcao() {
//     console.log("Eu sou uma função");
//     funcaoB();
//     funcaoC();
// }
// funcao()

//DEPOIS ES6
// // EXEMPLOS DE EXPORTAÇÃO

// // DEFAULT / PRINCIPAL
// export default function funcaoB() {
//   console.log("Sou a função B");
// }

// function funcaoBB() {
//   console.log("Sou a função BB");
// }

// // COMUM
// export function funcaoC() {
//   console.log("Sou a função C");
// }

// export function funcaoD() {
//   console.log("Sou a função D");
// }

// export const nomeDoUsuario = "Silas"

// // ou 
// // export { funcaoC, funcaoD };
// // export default funcaoBB;

// // // // EXEMPLOS DE IMPORTAÇÃO

// // // // // default
// // // import funcaoB from "./funcoes.js";

// // // default com outro nome
// // import funcaoBDoOutroArquivo from "./funcoes.js";

// // // // // comum
// // // import { funcaoC, funcaoD, nomeDoUsuario } from "./funcoes.js";

// // // comum com apelido
// // import { 
// //     funcaoC, 
// //     funcaoD as apelidoDaFuncaoD, 
// //     nomeDoUsuario as nomeDoMelhorUsuario 
// // } from "./funcoes.js";

// // // // default + comum
// // // import funcaoB, { funcaoC, funcaoD, nomeDoUsuario } from "./funcoes.js";


// // // // USANDO AS FUNÇOES IMPORTADA
// // function funcaoA() {
// //     console.log(`Executando função A que o ${nomeDoMelhorUsuario} gosta muito`);
// //     funcaoBDoOutroArquivo();
// //     funcaoC();
// //     apelidoDaFuncaoD();
// // }
// // funcaoA()

// // function funcaoB(){
// //     console.log("Sou a função B no arquivo principal");
// // }


// // // IMPORTAR COM ALIAS/APELIDO
// // import { funcaoC as minhaFuncaoC } from './funcoes.js'
// // function funcao() {
// //     console.log("Eu sou uma função");
// //     minhaFuncaoC();
// // }
// // funcao()

// // // IMPORTAR TUDO *
// // import * as minhasFuncoes from './funcoes.js'

// // function funcao() {
// //     console.log("Eu sou uma função");
// //     minhasFuncoes.default();
// //     minhasFuncoes.funcaoC();
// // }
// // funcao()


// // // IMPORTAR O DEFAULT E TODO O RESTO COM O *
// import funcaoB, * as minhasFuncoes from './funcoes.js'

// function funcao() {
//     console.log("Eu sou uma função");
//     funcaoB();
//     minhasFuncoes.funcaoC();
// }
// funcao()