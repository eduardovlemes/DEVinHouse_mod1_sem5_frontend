const botaoCadastro = document.getElementById("botaoSubmeter");

botaoCadastro.addEventListener("click", enviarInfo);

function enviarInfo(){

    let enviarNome = document.getElementById("inserirNome").value;
    let enviarLinkImagem = document.getElementById("inserirImagem").value;
    let enviarDescricao = document.getElementById("inserirDescrição").value;

    nomeCard.innerHTML = enviarNome;
    imagemCard.innerHTML = "<img src=" + enviarLinkImagem + "/>";
    descricaoCard.innerHTML = enviarDescricao;
}
export default enviarInfo()