const exibirConselho = document.querySelector('#conselho-mensagem');
const exibirImagem = document.querySelector('#container__conselho')
const containerImg = document.querySelector('#container-imagem')
const myImage = document.querySelector('img')

const exibeConselho = () => {

    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            return response.json();
        })
        .then(function (objeto) {
            const found = objeto.slip.advice;
            console.log(found)
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
