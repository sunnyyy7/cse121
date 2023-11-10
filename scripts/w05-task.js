/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        
        let article = document.createElement('article');
        let templeName = document.createElement('h3');
        templeName.textContent = temple.templeName;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);

        article.appendChild(templeName);
        article.appendChild(img);

        templesElement.appendChild(article);
    });    
}

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};


const reset = () => {
    templesElement.innerHTML = '';
};

const sortBy = (temples) => {
    reset();
    switch (document.querySelector('#sortBy').value) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1950));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
};

/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */

getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => sortBy(templeList));