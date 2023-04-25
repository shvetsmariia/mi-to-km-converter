/* eslint-disable no-console */
/* eslint-disable no-undef */
function convertMilesToKilometers(mi) {
  const milesInOneKilometer = 0.621371;
  km = milesInOneKilometer;

  return (mi * km);
}
console.log(convertMilesToKilometers(1));

function convertKilometersToMiles(km) {
  const kilometersInOneMile = 1.609344;
  mi = kilometersInOneMile;

  return (km * mi);
}
console.log(convertKilometersToMiles(1));
