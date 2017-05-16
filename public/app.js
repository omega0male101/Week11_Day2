var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var contentString = 'Faith..'
  var center = { lat: 43.645187, lng: -115.992980 };
  var london = { lat: 41.645187, lng: -105.992980 };
  var mainMap = new MapWrapper(mapDiv, center, 19);

  mainMap.addMarker(center, contentString);
  mainMap.addClickEvent();

  var ButtonClicked = function(){
     mainMap.googleMap.setCenter(london)
     mainMap.googleMap.setZoom(10)
   }

   var mainButton = document.querySelector('.button')
     mainButton.onclick = ButtonClicked

}

window.addEventListener('load', initialize);





