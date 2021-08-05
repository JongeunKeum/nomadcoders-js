/********** #8.0 **********/

function onGeoSuccess(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log("You live in", lat, lng);
}

function onGeoError() {
	alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
