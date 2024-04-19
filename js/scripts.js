// insert current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()

//nav button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;

//reviews
import {reviews} from "../data/reviews.js"
//console.log(reviews)

const target = document.querySelector("#reviewCards")

for (let x = 0; x < reviews.length; x++) {

    //create section
    const section = document.createElement('section')

    const name = document.createElement('h3')
    name.textContent = reviews[x].name

    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

    const rating = document.createElement('div')

    for (let step = 0; step < reviews[x].stars; step++) {
        const starNumber = document.createElement('img')
        starNumber.src = "./images/star.svg"
        rating.appendChild(starNumber)    
    }



    //build figure with child elements
    section.appendChild(name)
    section.appendChild(rating)
    section.appendChild(myReview)


    //attach to html
    target.appendChild(section)

}