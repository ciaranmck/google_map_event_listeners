var initialize = function() {
  var center = {lat: 51.507351, lng: -0.127758};
  var musuem = {lat:51.491062, lng: -0.127789};
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new mapWrapper(mapDiv, center, 10);
  mainMap.addMarker(center);
  mainMap.addMarker(musuem);
  mainMap.addClickEvent(); 
  mainMap.addInfoWindow(musuem);

  var bounceButton = document.querySelector("#button-bounce-markers");
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var homeButton = document.querySelector("take-me-home");
  homeButton.addEventListener("click", mainMap.setCenter(52.813548, -6.875788).bind(mainMap));
}

window.addEventListener("load", initialize);