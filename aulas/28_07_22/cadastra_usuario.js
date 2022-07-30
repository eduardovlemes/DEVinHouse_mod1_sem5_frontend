import { renderizaCard, divUsuario } from "./apresenta_usuario.js";

const form = document.querySelector('form');
const recebeNome = document.getElementById("inserirNome");
const recebeImagem = document.getElementById("inserirImagem");
const recebeDescricao = document.getElementById("inserirDescrição");

const botaoCadastro = document.getElementById("botaoSubmeter");

botaoCadastro.addEventListener("click", function (event) {
    event.preventDefault()
    let nome = recebeNome.value;
    let imagem = recebeImagem.value;
    let descricao = recebeDescricao.value;
    divUsuario.innerHTML = "";
    renderizaCard(nome, imagem, descricao)
    form.reset()
})