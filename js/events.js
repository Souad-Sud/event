//Exercise 1
const showContent = e => console.log(e.target.textContent)
document.querySelector(".porcupine").onclick = showContent;
document.querySelector(".panther").onclick = (e) => console.log(e.target.tagName);
// window.addEventListener('click', clickFunction = () => {
//     console.log("You click me")
// })

window.onclick = e =>console.log(e.target);

//Exercice 2

//I
document.querySelector(".penguin").onclick = (e) => console.log(e.target.textContent.toUpperCase());
//II
//window.onclick = e => console.log(e.target.textContent.toUpperCase())

//Exercise 3
const ShowPelicanManyTimes = () => {
    for(let i = 0; i < 3; i++) {
        console.log("I love pelicans")
    }
};

document.querySelector(".pelican").addEventListener("click", ShowPelicanManyTimes);


//III
const birdLove = animal => console.log(`${animal} is a prety boy`);
document.querySelector(".parrot").addEventListener("click", e => birdLove(e.target.textContent));
document.querySelector(".peacock").addEventListener("click", e => birdLove(e.target.textContent));

//Exercise 4
const notAneater = () => console.log("I am NOT an anteater");
const notArmadillo = () => console.log("I am NOT an armadillo");

//onlick can have only one value but click can have more than one 
document.querySelector(".pangolin").addEventListener("click", notAneater);
document.querySelector(".pangolin").addEventListener("click", notArmadillo), {once: true};

//it becomes an array
//console.log(document.querySelectorAll(".tab"));
//let x = document.querySelectorAll(".tab");
//console.log(x);

//to remove the array
//let table = Array.from(document.querySelectorAll(".tab"));
//console.log(table);

//array.isArray

//Exercise 5

const bestAnimal = animal =>
    //if the animale is panther show that but if it is another thing show something eles
    console.log((animal.toLowerCase() === "panther") ? `${animal} is the jungle assassin` : `${animal}  is the best` );

//the otherway of doing it 
//     if (animal.toLowerCase() === "panther") {
//         console.log(`${animal} is the jungle assassin`)
//     } else {
//         console.log(`${animal} is the best!`);
//     }
// }'
    

let animalTabs = Array.from(document.querySelectorAll(".tab"));

animalTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent)))

document.querySelector("footer p span").addEventListener("click", () => console.log("Span"))

document.querySelector("footer").addEventListener("click", () => console.log("Footer"), true)

document.querySelector("footer p").addEventListener("click", () => console.log("Paragraph"), true)


//add a new clasname 
//document.querySelector(".porcupine").classList.add("hello");
//document.querySelector(".porcupine").classList.add("New-Class");

//Exercise7



const setActive = (clickkedTab) => {
    animalTabs.forEach(tab => tab.classList.remove("active"));
    clickkedTab.classList.add("active");
    document.querySelector(".header__page-title").textContent = clickkedTab.textContent;
}

animalTabs.forEach(tab => tab.addEventListener("click", () =>setActive(tab)));

// document.querySelector(".pangolin").addEventListener("mouseenter", () =>console.log())
// document.querySelector(".pangolin").addEventListener("mouseenter", () =>())

let animalContent = Array.from(document.querySelectorAll(".content"));
//create a new variable 
const findContent = classToMatch => {
    animalContent.forEach(contentDiv => {
        if (contentDiv.classList.contains(classToMatch)) {
            contentDiv.classList.add("featured")
        }
    })
}

animalTabs.forEach(tab => tab.addEventListener("click", () => {
    findContent(tab.textContent.toLowerCase())
}));

//animalTabs.forEach(tab => tab.addEventListener("mouseleave", () =>
    // animalContent.forEach(contentDiv => contentDiv.classList.remove("featured"))
//))


//Exercise 10
let searchInput = document.querySelector("#search");
const findTab = () => {
    animalTabs.forEach(tab => {
        if(tab.textContent.toLowerCase().includes(searchInput.value)) {
          tab.classList.add("active")
        }else {
            tab.classList.remove("active");
        }
    })
}

searchInput.addEventListener("input", findTab);

//let countries = ["Australia", "Sweden", "Pakistan"];

// countries.push("India");
// console.log(countries)

let australia = {
    name: "Australia",
    capitalCity: "Canberra",
    language: "English",
    population: 25000000,
    sports: ["Cricket", "Aussie Rules", "Tennis"]
}

console.log(`There are ${australia.population} living in Australia`);
document.querySelector("h3").textContent  = `this is an example of displaying data from an array on html so we have Australia and it's capitale city is : ${australia.capitalCity} they speak : ${australia.language} and the population is : ${australia.population}`;

//object constrctor should be with a function
function Country(name, capitalCity, language, population, sports) {
    this.name = name;
    this.capitalCity = capitalCity;
    this.language = language;
    this.population = population;
    this.sports = sports;
    this.description = () => console.log(`${this.name} jkbejgbhrjeb `)

}

let sweden = new Country("Sweden", "Stockholm", "Svenska", 11000000, ["Hockey", "Brandboll", "Bandy"]);
let pakistan = new Country("Pakistan", "IslamAbad", "Urdu", 24100000, ["Cricket", "Hocky"]);

console.log(sweden.capitalCity);
console.log(sweden.sports)
console.log(sweden.sports[2])


let countriess = [sweden, pakistan, australia];

countriess.forEach(Country => Country.description())