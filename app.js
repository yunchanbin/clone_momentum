const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
//loginForm은 HTML Element이므로 querySelector로 찾을 수 있다.

function handleLoginBtnClick(){
    const username = loginInput.value;
    console.log(username);
    
}


loginButton.addEventListener("click", handleLoginBtnClick);