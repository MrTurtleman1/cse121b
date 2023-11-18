/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Max Tippetts';
let curentYear = new Date().getFullYear();
let profilePicture = 'images/me.jpeg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year');
const imageElement = profilePicture;
/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${curentYear}`;
imageElement.setAttribute = ('src', profilePicture);
imageElement.setAttribute = ('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */
let starches = ['pasta', ' potatoes', ' bread'];
foodElement.innerHTML += `<br>${starches}`;
let fruit = ' bananas';
starches.push(fruit);
foodElement.innerHTML += `<br>${starches}`;
starches.shift();
foodElement.innerHTML += `<br>${starches}`;
starches.pop()
foodElement.innerHTML += `<br>${starches}`;



