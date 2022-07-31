// Crie um site com um botão que espera receber um evento de click e uma função callback que informe ao usuário que o botão foi clicado.

const botao = document.getElementById("botao")
const conteudo = document.getElementById("conteudo")

const inserirClickNaTela = function(){
    conteudo.innerHTML += "Clicou!"
}
botao.addEventListener("click", inserirClickNaTela)