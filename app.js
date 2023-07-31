const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    console.log("title was clicked");
    if(h1.style.color != "blue"){
        h1.style.color = "blue";
    }else{
        h1.style.color = "black";
    }
}

function handelMouseEnter(){
    h1.innerText = "mouse is here!";
    
}

function handleMouseLeave(){
    h1.innerText = "mouse is gone!";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("Please check your network connection");
}

function handleWindowOnline(){
    alert("Connection!")
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handelMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
