/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Sunny Yeung';
let currentyear = 2023;
let profilePicture = 'images/IMG_1204.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('img')

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentyear;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullName}`);
/* Step 5 - Array */

let favFoods = ['DimSum', 'Fried Rice', 'Noddles', 'Pizza', 'Salad']
foodElement.innerHTML = favFoods.join();
Food1 = 'Burrito';
favFoods.push(Food1);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;






