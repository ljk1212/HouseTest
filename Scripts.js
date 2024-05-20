var map;
var service;
var infowindow;
var userLocation;
var autocomplete;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
  infowindow = new google.maps.InfoWindow();
  autocomplete = new google.maps.places.Autocomplete(document.getElementById('address'));
  autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
  // Your onPlaceChanged function code here
}

// Add the rest of your JavaScript functions here

