var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
}

MapWrapper.prototype = {

  addMarker: function(coords, contentString){
    
    var marker = new google.maps.Marker({ 
      position: coords, 
      map: this.googleMap 
    })

    var infowindow = new google.maps.InfoWindow({ 
      content: contentString 
    })

    marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker);
    })

  }

}

