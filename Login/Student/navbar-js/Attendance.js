// var x = document.getElementById("demo");
//location generation code;
function location1() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert('location access deniedcannot take attendance');
  }
}
function showPosition(position) {
    const lat = position.coords.latitude;
    const longi = position.coords.longitude;
    document.getElementById('ab1').innerText = lat;
    document.getElementById('ab2').innerText = longi;
    document.getElementById('lat1').innerText = lat;
    document.getElementById('logi2').innerText = longi;
}
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;

//camera script

// load cam 
Webcam.set({
    width:300,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
})

Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('results').innerHTML= '<img src="'+data_uri+'">'
    })
}


// submission 
function setupCam(){
    const attendance = document.querySelector("#rightbody").innerHTML;
    localStorage.setItem("Attendance",attendance);
    alert("submitted attendance sucessfully");
}