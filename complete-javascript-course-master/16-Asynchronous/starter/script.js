'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}
          </p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `<article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}
//         </p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('portugal');
// getCountryData('united');
///////////////////////////////////////////////

// const getCountryAndNeighbour = function (country) {
//   //ajax call country1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //render country 1
//     renderCountry(data);
//     //get neighbour
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     //ajax call country2
//     const request2 = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request.send();
//     request2.addEventListener('load', function () {
//       const data2 = this.responseText;
//       console.log(data2);
//       renderCountry(data2, neighbour);
//     });
//   });
// };
// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//       console.log('1 second passed');
//       setTimeout(() => {
//         console.log('1 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
//const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   fetch(url).then(response => {
//     if (!response.ok) throw new Error(`Country not found(${response.status})`);
//     return response.json();
//   });
// };
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found(${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       //country2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}😢😢`);
//       renderError(`Something went wrong 😢😢😢${err.message}.Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour not found');
//       //country2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'country not found'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}😢😢`);
//       renderError(`Something went wrong 😢😢😢${err.message}.Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// coding challenge#1
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(respone => {
//       console.log(respone);
//       if (!respone.ok)
//         throw new Error(`Problem with geocoding ${respone.status}`);
//       return respone.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`you are in${data.city},${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found(${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))

//     .catch(err => console.error(`${err.message}💥💥💥`));
// };
// whereAmI(52.5058, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);
//Event loop in practice
// console.log('test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(res);
// });

// console.log('test end');
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('lotter draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('you win ');
//     } else {
//       reject('you lost your money');
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res).catch(err => console.error(err)));
// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('i waited for 1 sec'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.error(x));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then(pos => console.log(pos));
// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       // console.log(response);
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`you are in${data.city},${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       // console.log(response);
//       if (!res.ok) throw new Error(`Country not found(${res.status})`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))

//     .catch(err => console.error(`${err.message}💥`));
// };
// btn.addEventListener('click', whereAmI);
//coding challenge#2
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const imgContainer = document.querySelector('.images');
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('image not found'));
//     });
//   });
// };
// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//geoloaction
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // reverse geocoding
//     const geo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!geo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await geo.json();

//     console.log(dataGeo);
//     //country data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting location data');
//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
//     return `you are in${dataGeo.city},${dataGeo.country}`;
//   } catch (err) {
//     console.error(err);
//     renderCountry(`something went wrong${err.message}`);
//     // reject promise returned from async function
//     throw err;
//   }
// };
// console.log('1 will get loaction');
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2:${err.message}`))
//   .finally(() => console.log(`3:finished getting location`));
// console.log('2 finished getting loaction');
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2 ${city}`);
//   } catch (err) {
//     console.error(`2${err.message}`);
//   }
//   console.log('3 finished getting loaction');
// })();
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   fetch(url).then(response => {
//     if (!response.ok) throw new Error(`Country not found(${response.status})`);
//     return response.json();
//   });
// };
// const get3Countries = async function (c1, c2, c3) {
//   try {
// const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
// const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
// const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
// console.log(data1.capital, data2.capital, data3.capital);
// promise.all combinator function
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3Countries('portugal', 'canada', 'tanzania');
// other promise combinators
//Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// });
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('request took to long'));
//     }, sec * 10000);
//   });
// };
// Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));
//promise.allsettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(error => console.log(error));
// //Promise any
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(error => console.log(error));
