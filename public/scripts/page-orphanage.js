const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheelZoom: false,
    zoomScroll: false
}

//cria mapa
const map = L.map('mapid', options).setView([-25.4559554,-49.3205856], 15)

//cria e adiciona camadas
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//cria icone
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

 //adiciona marcador
L
    .marker([-25.4559554,-49.3205856], { icon })
    .addTo(map)


//imagens

function selectImage(event){
    const button = event.currentTarget

    //remover as classes active class
    const buttons = document.querySelectorAll(".images button")    
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem principal 
    imageContainer.src = image.src

    //adicionar classe active
    button.classList.add('active')
}
