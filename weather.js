//NYC weather app using OpenWeatherMap API
//apikey = '77c3e83ebd11ece664752e2550685877';


var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q=' +input.value +'&units=imperial&appid=77c3e83ebd11ece664752e2550685877')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Cannot locate this city"));
})

var tempValue = Math.round(((parseFloat)))


