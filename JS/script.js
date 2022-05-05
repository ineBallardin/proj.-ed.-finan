let menuIsOpened = false
const button = document.querySelector('nav ul.button')
const menu = document.querySelector('nav ul.menu')

button.addEventListener("click", () => {
    if (!menuIsOpened) {
        menu.style.display = 'flex'
        menuIsOpened = true
    } else {
        menu.style.display = 'none'
        menuIsOpened = false
    }
})

// matriz com as imagens e variável que armazena a primeira imagem (indice 0)
let fotos = ["img01.jpg", "img02.jpg", "img03.jpg", "img04.jpg"]
let fotoAtual = 0

// chamada da função que altera as imagens
altImg(fotoAtual);

// definindo untervalo de tempo entre uma imagem e outra
setInterval(function() {
    fotoAtual++
    if (fotoAtual > 3){
        fotoAtual = 0
    }
    altImg(fotoAtual)
}, 7000)


// criando a função que altera as imagens
function altImg (foto) {
document.querySelector(".img-banner").src = "/Imagens/"+fotos[foto]
}