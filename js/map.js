// Initialize the map at Cobb Hall
var map = L.map('map').setView([41.7898, -87.5998], 15);  // Coordinates for Cobb Hall

// Add a tile layer from OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add a marker for Cobb Hall
var marker = L.marker([41.7898, -87.5998]).addTo(map);


// Add a circle near the University's Rockefeller Chapel
var circle = L.circle([41.7881, -87.5962], {
    color: 'blue',        // Outline color of the circle
    fillColor: '#30f',    // Fill color of the circle
    fillOpacity: 0.3,     // Semi-transparent (0-1: 0 means fully transparent, 1 means fully opaque)
    radius: 300           // Circle radius in meters
}).addTo(map);

// Add a polygon highlighting the Joe and Rika Mansueto Library
var polygon = L.polygon([
    [41.7922, -87.6014],
    [41.7922, -87.6006],
    [41.7918, -87.6006],
    [41.7918, -87.6014]
]).addTo(map);

// Add pop-up to the marker, circle, polygon
marker.bindPopup("<b>Welcome!</b><br>Here is Cobb Hall.");
circle.bindPopup("You are in the University's Rockefeller Chapel area.").openPopup();
polygon.bindPopup("Joe and Rika Mansueto Library");
