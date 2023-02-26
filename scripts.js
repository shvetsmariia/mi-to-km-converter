document.getElementById('renderConvertIntoKilometers').onclick = function() {
  const mi = document.getElementById("inputMiles").value; 
  let km = mi * 1.609344; 
  km = km.toFixed(3);
  document.getElementById("outputKilometers").innerHTML = km;  
}

document.getElementById('renderConvertIntoMiles').onclick = function() {
  const km = document.getElementById("inputKilometers").value; 
  let mi = km * 0.621371; 
  mi = mi.toFixed(3);
  document.getElementById("outputMiles").innerHTML = mi;  
}

function renderConvertIntoKilometers() {
  const mi = document.getElementById("inputMiles").value; 
  let km = mi * 1.609344; 
  km = km.toFixed(3);
  document.getElementById('outputKilometers').innerHTML = km;  
}

function renderConvertIntoMiles() {
  const km = document.getElementById("inputKilometers").value; 
  let mi = km * 0.621371; 
  mi = mi.toFixed(3);
  document.getElementById('outputMiles').innerHTML = mi;  
}

// function convertMiToKm (mi) {
//   const milesInOneKm = 0.621371; 
//   km = milesInOneKm; 
  
//   return (mi * km); 
// }
// console.log(convertMiToKm(1).toFixed(3));

// function convertKmToMi (km) {
//   const kmInOneMile = 1.609344; 
//   mi = kmInOneMile; 
  
//   return (km * mi); 
// }
// console.log(convertKmToMi(1).toFixed(3));