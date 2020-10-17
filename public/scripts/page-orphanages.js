
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

//cria popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minHeight:240,
    minwidth:240
}).setContent('Lar das meninas <a href="orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"> </a>')

 //adiciona marcador
L
    .marker([-25.4559554,-49.3205856], { icon })
    .addTo(map)
    .bindPopup(popup)
