/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Max Tippetts",
    photo: ".././images/me.jpeg",
    favouriteFoods: [
        'pasta',
        'banana',
        'potato'
    ],
    hobbies: [
        'Pokémon',
        'Baking',
        'third thing'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Logan, UT',
        length: '2 years'
    },{
        place: 'San Antonio, TX',
        length: '6 years'
    },{
        place: 'Woodbridge, VA',
        length: '4 years'
    },{
        place: 'West Jordan, UT',
        length: '1 year'
    },{
        place: 'Orem, UT',
        length: '6 years'
    },{
        place: 'Rexburg, ID',
        length: '2 years'
        /*Leaving out anything less than one year and rounding others*/
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
photo.setAttribute('src', myProfile.photo)
photo.setAttribute('alt', `Picture of ${myProfile.name}`)

/* Favorite Foods List*/
myProfile.favouriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
    });

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
    });

/* Places Lived DataList */
let dl = document.createElement("dl");
dl.setAttribute('class', 'places-lived')
myProfile.placesLived.forEach(tag => {
        let dt = document.createElement("dt");
        dt.textContent = myProfile.placesLived[tag];
        document.querySelector('#places-lived').appendChild(dt);

        let dd = document.createElement("dd");
        dd.textContent = myProfile.placesLived[tag];
        document.querySelector('#places-lived').appendChild(dd);
/*why?*/
    });



