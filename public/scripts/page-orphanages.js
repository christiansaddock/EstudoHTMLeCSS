
//cria mapa
const map = L.map('mapid').setView([-25.4559554,-49.3205856], 15)

//cria e adiciona camadas
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//cria icone
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

function addMarker({id, name, lat, lng}){

    //cria popup
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minHeight:240,
        minwidth:240
    }).setContent(`${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`)

    //adiciona marcador
    L
    .marker([lat,lng], { icon })
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage  = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    console.log('aqui')
    addMarker(orphanage)
})