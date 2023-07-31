const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    console.log("title was clicked");
    if(title.style.color != "blue"){
        title.style.color = "blue";
    }else{
        title.style.color = "black";
    }
}

function handelMouseEnter(){
    title.innerText = "mouse is here!";
    
}

function handleMouseLeave(){
    title.innerText = "mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handelMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
