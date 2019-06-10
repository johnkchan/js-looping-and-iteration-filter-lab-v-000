// Code your solution in this file
function findMatching(drivers, str) {
  return drivers.filter(function (driver) { return driver.toLowerCase() == str.toLowerCase() })
}

function fuzzyMatch(drivers, str) {
  let matchingDrivers = [];
  
  for (const driver of drivers) {
    if (driver[0].toLowerCase() == str.toLowerCase()) {
      matchingDrivers.push(driver);
    }
  }
  
  return matchingDrivers;
}

function matchName(drivers, str) {
  return drivers.filter(function(driver) { return driver.name == str });
}