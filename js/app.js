'use strict';
console.log('hey world');



let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// ***** DOM WINDOWS ******

let cookieStore = document.getElementById('stores');

console.dir(cookieStore);


//****** RENDERING *********/
function header (){
  let trElem = document.createElement('tr');
  cookieStore.appendChild(trElem);

  let thElem = document.createElement('th');
  trElem.appendChild(thElem);
  thElem.textContent = '';

  for(let i = 0; i < hours.length; i++){
    let thHourElem = document.createElement('th');
    trElem.appendChild(thHourElem);
    thHourElem.textContent = hours[i];
  }

}


header();
// ****CONSTRUCTOR FUNCTION*****

function City(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.total = 0;
};

let seattle = new City('Seattle', 23, 65, 6.3);
let tokyo = new City('Tokyo', 3, 24, 1.2);
let dubai = new City('Dubai', 11, 38, 3.7);
let paris = new City('Paris', 20, 38, 2.3);
let lima = new City('Lima', 2, 16, 4.6);


// *****PROTOTYPE METHODS******

City.prototype.getTotal = function (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

City.prototype.cookiesSold = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookies = Math.floor(this.getTotal(this.minCust, this.maxCust) * this.avgCookieBought);
    this.cookiesBought.push(cookies);
    this.total = this.total + this.cookiesBought[i];
  }
};

City.prototype.cityRender = function(){
  let trCityElem = document.createElement('tr');
  cookieStore.appendChild(trCityElem);

  let thCityElem = document.createElement('th');
  trCityElem.appendChild(thCityElem);
  thCityElem.textContent = this.name;
}



// ***** EXECUTABLE CODE ********

seattle.cookiesSold();
tokyo.cookiesSold();
dubai.cookiesSold();
paris.cookiesSold();
lima.cookiesSold();

seattle.cityRender();
tokyo.cityRender();
dubai.cityRender();
paris.cityRender();
lima.cityRender();









// // source: MDN Web Docs
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }




// 1. Store the min/max hourly customers, and the average cookies per customer, in object properties.

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [],
//   total: 0,
//   customerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.customerPerHour() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   }
// };


// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
//   total: 0,
//   customerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.customerPerHour() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesBought: [],
//   total: 0,
//   customerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.customerPerHour() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   }
// };

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesBought: [],
//   total: 0,
//   customerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.customerPerHour() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   }
// };

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
//   total: 0,
//   customerPerHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSales: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookiesNeeded = this.customerPerHour() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total = this.total + cookiesNeeded;
//     }
//   }
// };

