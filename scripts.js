document.getElementById('convertButton').onclick = function() {
  let miles = document.getElementById("inputMiles").value; 
  let km = miles * 1.609344; 
  km = km.toFixed(3);
  document.getElementById("outputKilometers").innerHTML = km;  
}

function convertIntoMiles() {
  let kilometers = document.getElementById("inputKilometers").value; 
  let mi = kilometers * 0.621371; 
  mi = mi.toFixed(3);
  document.getElementById('outputMiles').innerHTML = mi;  
}

// document.getElementById('convertButtonTwo').onclick = function() {
//   let kilometers = document.getElementById("inputKilometers").value; 
//   let mi = kilometers * 0.621371; 
//   mi = mi.toFixed(3);
//   document.getElementById("outputMiles").innerHTML = mi;  
// }