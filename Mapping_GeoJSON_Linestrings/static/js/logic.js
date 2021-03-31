// Add console.log to check to see if our code is working.
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    'Day Navigation': light,
    'Night Navigation': dark
};

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
    center: [44.0, -80.0],
    zoom: 2,
    layers: [dark]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// Accessing the airport GeoJSON URL
let torontoData = 'https://raw.githubusercontent.com/shireenkahlon/Mapping_Earthquakes/main/torontoRoutes.json';

// Create a style for the lines.
let myStyle = {
    color: "#ffffa1",
    weight: 2
}
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data){
    console.log(data);
      // Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer){
        layer.bindPopup("<h2>" + "Code: " + feature.properties.airline + "</h2><hr><h3>" + "Destination: " + feature.properties.dst + "</h3>")
    }
}).addTo(map);

});

//pointToLayer
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//         // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng){
//         console.log(feature)
//         return L.marker(latlng)
//         .bindPopup("<h2>" + feature.properties.city + " , " + feature.properties.country + "</h2><hr><h3>" + feature.properties.name + "</h3>")
//     }
// }).addTo(map);

// onEachFeature
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer){
//     console.log(feature)
//     layer.bindPopup("<h2>" + "Airport Code: " + feature.properties.id + "</h2><hr><h3>" + "Airport Name: as" + feature.properties.name + "</h3>")
//     }
// }).addTo(map);








