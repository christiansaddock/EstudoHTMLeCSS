//cria mapa
const map = L.map('mapid').setView([-25.4559554,-49.3205856], 15)

//cria e adiciona camadas
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//cria icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

let marker;

// Criar marcador
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lat]').value = lng;

    // remove icone
    marker && map.removeLayer(marker);

    //add icone
    marker = L.marker([lat, lng], { icon})
    .addTo(map);
})

//fotos
function addPhotoField(){
    //pegar o cojuntcontainer de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fields = document.querySelectorAll('.new-upload')
    //duplicar da ultima imagem add
    const clone = fields[fields.length - 1].cloneNode(true)
    //valida campo vazio
    const input = clone.children[0];
    if(input.value == "")
        return;
    //limpar campo antes de add
    clone.children[0].value = "";
    //add o clone ao container de fotos
    container.appendChild(clone)
}

function deleteField(event){
    const span = event.currentTarget
    const fieldContainer = document.querySelectorAll('.new-upload')
    
    if(fieldContainer.length <= 1)
    {
        span.parentNode.children[0].value = ""
        return
    }
    span.parentNode.remove()    
}

//Atende fds?
function toggleSelect(event){
    //retirar active
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    //colocar o active no botao selecionado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}