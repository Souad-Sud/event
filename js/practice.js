const myArticle = document.getElementById("tesssst");
myArticle.classList.add("display");
//replace this class with another class
myArticle.addEventListener("click" , e => {

    if(e.target.classList.contains("replaced")) {
        e.target.textContent += "Click click click";
    }else {

        e.target.classList.replace("display", "replaced")
    }
    });