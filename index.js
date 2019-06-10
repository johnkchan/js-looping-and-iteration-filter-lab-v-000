// Code your solution in this file
function findMatching(drivers, str) {
  let matchingDrivers = [];
  
  for (const driver of drivers) {
    if (driver.toLowerCase() == str.toLowerCase()){
      matchingDrivers.push(driver);
    }
  }
  
  return matchingDrivers;
}