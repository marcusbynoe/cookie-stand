'use strict';
console.log('hey world');

// 2. Use a method of that object to generate a random number of customers per hour. Objects/Math/random

// 3. Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.

// 4. Store the results for each location in a separate array… perhaps as a property of the object representing that location.

// 5. Display the values of each array as unordered lists in the browser.

// 6. Calculating the sum of these hourly totals; your output for each location should look like this:


// source: MDN Web Docs
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




// 1. Store the min/max hourly customers, and the average cookies per customer, in object properties.
let seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesBought: [],
  customersPerHour: [],

  custPerHour: function () {
    let currentCust = getRandomIntInclusive(this.minCust, this.maxCust);

  }
};




let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  cookiesBought: [],
  customersPerHour: [],
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  cookiesBought: [],
  customersPerHour: [],
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookiesBought: [],
  customersPerHour: [],

};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  cookiesBought: [],
  customersPerHour: [],
};

let sectionElement = document.getElementById('stores');