/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myInfo = {
    /* Populate Profile Object with placesLive objects */
    /* DOM Manipulation - Output */
    /* Name */
    name: 'Sunny Yeung',
    /* Photo with attributes */
    photo: 'images/IMG_1204.jpg',
    /* Favorite Foods List*/
    favoriteFoods: [
        'DimSum',
        'Fried Rice',
        'Noddles',
        'Pizza',
        'Salad'
    ],
    /* Hobbies List */
    hobbies: [
        'Basketball',
        'Football',
        'pickle ball',
        'Board games',
        'Camping',
        'hiking',
        'backpacking',
        'Travel'

    ]
};
/* Places Lived DataList */
myInfo.placesLived = [
    {
        place: 'Rexburg, ID',
        length: '3 years'
    },
    {
        place: 'Toronto, CA',
        length: '2 years'
    },
    {
        place: 'Hong Kong',
        length: '20 year'
    }
]

document.querySelector('#name').textContent = myInfo.name;

document.querySelector('#photo').setAttribute('src', myInfo.photo);

document.querySelector('#photo').setAttribute('alt', myInfo.name);

myInfo.favoriteFoods.forEach((food) => {
    let favoriteFoodElem = document.createElement('li');
    favoriteFoodElem.textContent = food;

    document.querySelector('#favorite-foods').appendChild(favoriteFoodElem);
});

myInfo.hobbies.forEach((hobby) => {
    let hobbyElem = document.createElement('li');
    hobbyElem.textContent = hobby;

    
    document.querySelector('#hobbies').appendChild(hobbyElem);
});

myInfo.placesLived.forEach((placeLived) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = placeLived.place;
    
    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = placeLived.length;
    
    document.querySelector('#places-lived').appendChild(placesLivedPlace);
    document.querySelector('#places-lived').appendChild(placesLivedLength);
})


