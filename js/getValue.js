//const text = document.getElementById("text");
//const button = document.getElementById("btn1");
//const name = document.getElementById("name");

 
// const showElement = () => {
//    name.innerHtml = text.value;
// }

// button.addEventListener("click", showElement)

const button = document.querySelector("button");
const input = document.querySelector("input");
const listEl = document.querySelector("ul");

button.addEventListener("click", () => {
    const inputValue = input.value;
    listEl.insertAdjacentHTML("beforeend", `<li>${inputValue}</li>`);
})
