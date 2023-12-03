/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = {}

/* async displayTemples Function */
const displayTemples = (temples) => {
    templeList.forEach(element => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = templesName;
        let img = document.createElement("img");
        img.setAttribute = ('src', "imageURL");
        img.setAttribute = ('alt', location);
        document.querySelector(article).appendChild(h3);
        templesElement.appendChild(article)
})};




/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    JSON.stringify(response);
    templesList.append(response);
    displayTemples(templesList)
}

/* reset Function */
const reset = () => {
    document.querySelector(article).remove();
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.querySelector('#sortBy')
    switch (filter) {
        case 0:
            filter = "utah"
            templeList.sort(temples.Includes("utah"))
            displayTemples()
        case 1:
            filter = "nonutah"
            templeList.sort(temples.notIncludes("utah"))
            displayTemples()
        /*case 2:What?????
        case 3:*/

    }
}


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => { sortBy(templeList) });