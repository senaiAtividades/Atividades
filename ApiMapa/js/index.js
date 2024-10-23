const ChaveApi = 'hmu4Ys96dbDXsha3TsZ5-6lMqULc-HqU2QPDQGj16Ys'

// https://www.here.com/docs/bundle/maps-api-for-javascript-developer-guide/page/topics/map-objects.html

//carrega tdos os dados da api da plataforma Here
var platform = new H.service.Platform({
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
    });


// Habilita o sistema de eventos do mapa como clicar e arrastar
var mapEvents = new H.mapevents.MapEvents(map);

// Add event listeners:
map.addEventListener('tap', function (evt) {
    // Log 'tap' and 'mouse' events:
    console.log(evt.type, evt.currentPointer.type);
});

// Instantiate the default behavior, providing the mapEvents object:
var behavior = new H.mapevents.Behavior(mapEvents);

