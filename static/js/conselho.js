
let exibirConselho = document.getElementById('conselho-mensagem');
let exibirImagem = document.getElementById('container__conselho')
const containerImg = document.querySelector('#container-imagem')

function exibeConselho() {
    
    fetch("https://api.adviceslip.com/advice")
    .then(response => {
        return response.text();
    })
    .then(function(objeto) {

        let found = objeto.match(/[^{}:\d][A-Z].+"/);
        exibirConselho.innerHTML = found;
    })
    .catch(error => console.log(error))

    
    var myImage = document.querySelector('[data-img]');
    let url = `https://api.thecatapi.com/v1/images/search`;
    fetch(url)
    .then(function(response) {
        return response.blob();
    })
    .then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        console.log(myBlob)
        myImage.src = objectURL;
        // let newUrl = response.url
        // console.log(newUrl)
        // let novaImg = document.createElement('img');
        // novaImg.innerHTML = `<img src="${url}" alt="Imagem de um gatinho" class="imagem__gato"></img>`
        // containerImg.appendChild(novaImg);
    }) 
    .catch(error => console.log(error))

}





// conselho => console.log(conselho)
// exibirConselho.innerHTML = conselho

// /[^{}:\d][A-Z].+"/

// let conselho = objeto;
// let reg = /[^{}:\d][A-Z].+"/;