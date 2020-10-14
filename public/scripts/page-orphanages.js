// Mapa - Leaflet.js

//Create Map
const map = L.map('mapid').setView([-23.7137158, -46.4167772], 15);

//Create end add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);


//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//Create popup
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg" </a>')



//Create end add marker
L.marker([-23.7137158, -46.4167772], { icon })
    .addTo(map)
    .bindPopup(popup)
    // .openPopup(popup);