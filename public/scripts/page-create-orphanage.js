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

})


let marker;

map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;


    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    // Remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map);
});


// Add campos de fotos

function addPhotoField() {
   // Pegar o container de fotos #images
   // Pegar o container para duplicar .new-image
   // Realizar o clone da ultima imagem adicionada
   // Add o clone ao container de #images
}
