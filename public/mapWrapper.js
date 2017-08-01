var mapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

mapWrapper.prototype = {
  addMarker: function(coords) {
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    this.markers.push(marker);
    return marker;
  },

  addInfoWindow: function(coords) {
    var infowindow = new google.maps.InfoWindow({
      content: content
            });
    var marker = this.addMarker(coords);
    marker.addListener('click', function() {
              infowindow.open(this.googleMap, marker);
            }.bind(this));
    },

    setCenter: function(latitude, longditude) {
      this.googleMap.setCenter({lat: latitude, lng: longditude});
    },

  addClickEvent: function() {
    google.maps.event.addListener(this.googleMap, "click", function(event) {
      var position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      this.addMarker(position);
    }.bind(this));
  },

  bounceMarkers: function() {
    this.markers.forEach(function(marker) {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    })
  }
}

var content = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Tate Modern</h1>'+
'<div id="bodyContent">'+
'<p>Tate Modern is a modern art gallery located in London. It is Britains national gallery of international modern art and forms part of the Tate group (together with Tate Britain, Tate Liverpool, Tate St Ives and Tate Online). It is based in the former Bankside Power Station, in the Bankside area of the London Borough of Southwark.</p>'+
'</div>'+
'</div>'