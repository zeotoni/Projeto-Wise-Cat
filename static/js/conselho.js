const exibirConselho = document.querySelector('[data-msg="conselho-mensagem"]');
const containerImg = document.querySelector('[data-container="container-imagem"]');
const myImage = document.querySelector('[data-img="conselho-imagem"]');

const exibeConselho = () => {

    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            return response.json();
        })
        .then(function (objeto) {
            const found = objeto.slip.advice;
            exibirConselho.innerHTML = found;
        })
        .catch(error => console.log(error))


    fetch("https://api.thecatapi.com/v1/images/search")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            const primeiroItemResposta = response.shift();
            const urlImagemGatinho = primeiroItemResposta.url;
            myImage.src = urlImagemGatinho;
        })
        .catch(error => console.log(error))

}
