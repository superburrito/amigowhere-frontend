var toPrint = "";
function whenConnected(){
	retrieveProfilePic("profileImg","userNameDiv");
}

function getReverseGeocodingData(friendStr, lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    // This is making the Geocode request
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'location': latlng}, function(results, status) {
		if (status === 'OK') {
			if (results[0]) {
				var returnStr = ""
				var result = results[0];
				var addComp = result.address_components;
				for(j=0; j<addComp.length; j++){
					types = addComp[j].types;
					name = addComp[j].long_name;
					if(types.indexOf("country")>-1){
						alert(friendStr+" "+name);
					}
				}
				//alert(returnStr);
			} else {
			  //alert('No results found');
			}
		  } else {
			//alert('Geocoder failed due to: ' + status);
		  }
	});

}

function test(){
	FB.api('me/friends?fields=name,picture.type(large), tagged_places.limit(1){place{location}}'
	,function(response){
		if (!response || response.error) {
		} else {
			var friends = response.data;
			for(i =0; i<friends.length; i++){
				var places = friends[i].tagged_places;
				if(places.data[0].place.location.country != undefined){
					alert(friends[i].name+" "+places.data[0].place.location.country);
				}else{
					var loc = places.data[0].place.location;
					var lat = parseFloat(loc.latitude);
					var lng = parseFloat(loc.longitude);
					getReverseGeocodingData(friends[i].name,lat, lng);
				}
			}
		}
	});
}

function retrieveProfilePic(imgId,nameDivId){
	FB.api('me?fields=name,picture.type(large)', function(response) {
		var userName = response.name;
		var userProfileSrc = response.picture.data.url;
		document.getElementById(imgId).src = userProfileSrc;
		document.getElementById(nameDivId).innerHTML = userName;
	});
}

function statusChangeCallback(response) {
	console.log('statusChangeCallback');
	console.log(response);
	// The response object is returned with a status field that lets the
	// app know the current login status of the person.
	// Full docs on the response object can be found in the documentation
	// for FB.getLoginStatus().
	if (response.status === 'connected') {
	  // Logged into your app and Facebook.
		whenConnected();
	} else if (response.status === 'not_authorized') {
	  // The person is logged into Facebook, but not your app.
	  
	} else {
	  // The person is not logged into Facebook, so we're not sure if
	  // they are logged into this app or not.
	  
	}
}

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
function checkLoginState() {
	FB.getLoginStatus(function(response) {
	  statusChangeCallback(response);
	});
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '327010674354140',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.7' // use graph api version 2.7
  });


  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

  // Load the SDK asynchronously
(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/en_US/sdk.js";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));