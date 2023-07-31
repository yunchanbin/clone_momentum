const h1 = document.querySelector("div.hello:first-child h1");
const firstClassName = h1.className;

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.className === clickedClass) {
        h1.className = firstClassName;
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);