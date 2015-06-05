angular
  .module('forecast', [])
  .controller('WeatherController', function($http){
  	var vm = this;

  	navigator.geolocation.getCurrentPosition(function(geoposition) {
  	  var lat = geoposition.coords.latitude;
  	  var long = geoposition.coords.longitude;

  	  $http	
  	    .get(`http://api.wunderground.com/api/a070218f3b576b90/conditions/q/${lat},${long}.json`)
  	    .success(function (data) {
  	  	console.log(data);
  	  	vm.temp_f = data.current_observation.temp_f;
      });

    });
 });











   function getJSON(url, cb) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };

  xhr.send();
 }