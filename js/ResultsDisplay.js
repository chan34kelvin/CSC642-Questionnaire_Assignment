
DisplayResults()

function DisplayResults(){

    const surveyResults = JSON.parse(sessionStorage.getItem("surveyObject"))

    for (let key in surveyResults){
        if(surveyResults[key] != ""){
            document.getElementById(key).innerHTML= surveyResults[key]
        }
    }
}

//this code is obtained from google api
//https://www.youtube.com/watch?v=29Dp2mSwS4w for learning how to use axios
//https://developers.google.com/maps/documentation/javascript/adding-a-google-map for the marker and init map
//https://developer.mapquest.com/documentation/open/geocoding-api/ how to use geocode here
function initMap() {

    const address= document.getElementById("address").innerHTML + " " + document.getElementById("city").innerHTML+ " " + document.getElementById("state").innerHTML + " " +document.getElementById("zip").innerHTML

    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address: address,
            key: process.env.GOOGLE_MAP_API_KEY
        }
    }).then(function (response) {

        const location = response.data.results[0].geometry.location

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: location,
        });
        
        const marker = new google.maps.Marker({
            position: location,
            map: map,
        });
    })
}