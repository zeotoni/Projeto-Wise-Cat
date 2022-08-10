
let myImg = document.querySelector('img')

let url = `https://api.thecatapi.com/v1/images/search`;
fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(response) {
    // console.log(response)
    const link = response.shift();
    const newUrl = link.url;
    console.log(newUrl)
    myImg.src = newUrl;

    // let novaImg = document.createElement('img');
    // novaImg.innerHTML = `<img src="${url}" alt="Imagem de um gatinho" class="imagem__gato"></img>`
    // containerImg.appendChild(novaImg);
}) 
.catch(error => console.log(error))