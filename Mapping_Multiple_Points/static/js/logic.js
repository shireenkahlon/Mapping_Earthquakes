// Add console.log to check to see if our code is working.
console.log('hank');
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 4);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
//  Add a circle to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'yellow',
//     fillOpacity: 0.75,
    
//     radius: 100
//  }).addTo(map);
//Add a circleMarker to the map for LA, Cali
// L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'ffffa1',    
//     radius: 100
//  }).addTo(map);

// iterate through cities
// An array containing each city's location, state, and population.
let cityData = cities;
  // Loop through the cities array and create one marker for each city.
cityData.forEach(function(city){
    let marker = L.circleMarker(city.location, {
      radius: city.population/200000,
      color: 'orange',
      fillcolor: '#FFA500',
      weight: 4})
    let bind = marker.bindPopup("<h2>" + city.city + "," + city.state + "</h2><hr><h3>Population: " + city.population.toLocaleString() + "</h3>")
    bind.addTo(map);
});
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY,

});



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

