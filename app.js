const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");


function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event){
    console.dir(event);
    event.preventDefault();
}


loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

