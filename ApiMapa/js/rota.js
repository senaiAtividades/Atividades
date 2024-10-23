const ChaveApi = 'hmu4Ys96dbDXsha3TsZ5-6lMqULc-HqU2QPDQGj16Ys';
const btnCoord = document.querySelector("#btnCoord");
const btnCep = document.querySelector("#btnCep");
const btnLogra = document.querySelector("#btnLogra");
const inputCep = document.querySelector("#inputCep");
const inputLogradouro = document.querySelector("#inputLogradouro");
const coordenadaX = document.querySelector("#coordenadaX");
const coordenadaY = document.querySelector("#coordenadaY");
const divForm = document.querySelector("#divForm");
const menuButton = document.querySelector("#menuButton");
const divFaixa = document.querySelector("#divFaixa");

menuButton.addEventListener("click", () => {
    divForm.classList.toggle('ocultar');
})


// https://www.here.com/docs/bundle/maps-api-for-javascript-developer-guide/page/topics/map-objects.html

//carrega tdos os dados da api da plataforma Here
const platform = new H.service.Platform({
    'apikey': ChaveApi
});

// Obtem os mapas padrao do object platform:
var defaultLayers = platform.createDefaultLayers();

// Instancia e exibe o map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
        zoom: 10,
        center: { lat: -10.9472, lng: -37.0731 }
    }
);

// Habilita o sistema de eventos do mapa como clicar e arrastar
var mapEvents = new H.mapevents.MapEvents(map);
var behavior = new H.mapevents.Behavior(mapEvents);
var ui = H.ui.UI.createDefault(map, defaultLayers);


var markers = []; // Lista pros marcadores

// Geocode pelo CEP
inputCep.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let cep = inputCep.value;
        fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${cep}&apikey=${ChaveApi}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.items.length > 0) {
                    divFaixa.innerHTML = data.items[0].title + ""
                    var location = data.items[0].position;
                    map.setCenter(location);
                    map.setZoom(14);
                    addMarker(location);
                } else {
                    alert('CEP não encontrado!');
                }
            });
        inputCep.value = "";
    }
});

// Geocode pelo Logradouro
btnLogra.addEventListener("click", () => {
    funcLogradouro();
    inputLogradouro.value = "";
});

inputLogradouro.addEventListener("keydown", (event) => {
    if(event.key === 'Enter'){
        funcLogradouro();
        inputLogradouro.value = "";
    }
});

const funcLogradouro = ()=>{
    let logradouro = inputLogradouro.value;
    fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${logradouro}&apikey=${ChaveApi}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (data.items.length > 0) {
                divFaixa.innerHTML = data.items[0].title
                var location = data.items[0].position;
                map.setCenter(location);
                map.setZoom(14);
                addMarker(location);
            } else {
                alert('Logradouro não encontrado!');
            }
        });
}

// Marcar coordenadas
btnCoord.addEventListener("click", () => {
    var lat = parseFloat(coordenadaX.value);
    var lng = parseFloat(coordenadaY.value);
    var location = { lat: lat, lng: lng };
    divFaixa.innerHTML = "Latitude: " + location.lat + "<br>Longitude: " + location.lng
    map.setCenter(location);
    addMarker(location);
});

// Add event listener para clicar 2 vezes no mapa
map.addEventListener('dbltap', (evt) => {
    var coord = map.screenToGeo(evt.currentPointer.viewportX, evt.currentPointer.viewportY);
    var location = { lat: coord.lat, lng: coord.lng };
    addMarker(location);
});

// Funçao para add marcador no mapa
function addMarker(location) {
    var marker = new H.map.Marker(location);
    markers.push(marker); // Add o marcador na lista
    map.addObject(marker);
    map.setCenter(location); // Centraliza no marcador

    // Add click listener para remover o marcador
    marker.addEventListener('tap', function () {
        map.removeObject(marker); // Remove o marcador do mapa
        markers = markers.filter(m => m !== marker); // Remove o marcador da lista
    });
}


