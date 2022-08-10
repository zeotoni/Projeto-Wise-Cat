
let exibirConselho = document.getElementById('conselho-mensagem');
let exibirImagem = document.getElementById('container__conselho')
const containerImg = document.querySelector('#container-imagem')

function exibeConselho() {

    fetch("https://api.adviceslip.com/advice")
        .then(response => {
            return response.json();
        })
        .then(function (objeto) {
            // Formato do objeto retornado
            // { "slip": { "id": 9, "advice": "True happiness always resides in the quest." } }
            // Quando o valor da variável não muda, é interessante usar const
            const found = objeto.slip.advice;
            exibirConselho.innerHTML = found;
        })
        .catch(error => console.log(error))


<<<<<<< HEAD
    var myImage = document.querySelector('[data-img]');
    let url = `https://api.thecatapi.com/v1/images/search`;
    fetch(url)
        .then(function (response) {
            // Aqui, a response dessa api, não é uma imagem, é um json
            // [{"id": "MjAyNTY4Ng","url": "https://cdn2.thecatapi.com/images/MjAyNTY4Ng.jpg","width": 720,"height": 540}]
            return response.json();
        })
        .then(function (response) {
            //Array.shift remove o primeiro item de um array e retorna;
            const primeiroItemResposta = response.shift();
            const urlImagemGatinho = primeiroItemResposta.url;
            myImage.src = urlImagemGatinho;
        })
        .catch(error => console.log(error))
=======
    
    let url = `https://api.thecatapi.com/v1/images/search`;
    fetch(url)
    .then(function(response) {
        return response.blob();
    })
    .then(function(response) {
        console.log(response)
        let novaImg = document.createElement('img');
        novaImg.innerHTML = `<img src="${url}" alt="Imagem de um gatinho" class="imagem__gato"></img>`
        containerImg.appendChild(novaImg);
    }) 
    .catch(error => console.log(error))
>>>>>>> 55c8446 (resolvendo erro no código)

}





// conselho => console.log(conselho)
// exibirConselho.innerHTML = conselho

// /[^{}:\d][A-Z].+"/

// let conselho = objeto;
// let reg = /[^{}:\d][A-Z].+"/;