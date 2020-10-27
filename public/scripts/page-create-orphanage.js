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
    const container = document.querySelector("#images")

   // Pegar o container para duplicar .new-image
   const fieldsContainer = document.querySelectorAll(".new-upload")

   // Realizar o clone da ultima imagem adicionada
   const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

   //Não posso permitir que seja adicionado sem o campo está preenchido
   const input = newFieldContainer.children[0]

   if (input.value === "") {
       return ;
   }

   //Limpar o campo antes de adicionar ao container de imagens
   input.value=""

   // Add o clone ao container de #images
   container.appendChild(newFieldContainer)
}

//Função de exclusão das imagens
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    // console.log(fieldsContainer.length);

    if(fieldsContainer.length <= 1) {
        //Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return ;
    }

    //Deletar o valor do campo
    span.parentNode.remove()
}

//Troca do Sim e não 
function toggleSelect(event) {

    //Retirar a classe .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach((button) => button.classList.remove('active'))

    //Adicionar a classe . active no botão clicado
     const button = event.currentTarget
     button.classList.add('active')

    //atualizar meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value

  
}







