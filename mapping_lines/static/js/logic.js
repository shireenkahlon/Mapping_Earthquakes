// Add console.log to check to see if our code is working.
console.log('hank');
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.163, -86.782], 4);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.198, -97.666],
    [43.6777, -79.6248],
    [40.641, -73.778]
];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    dashArray: '15, 15',
    dashOffset: '3',
    weight: 4,
    fillOpacity: 0.5}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: API_KEY,

});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


