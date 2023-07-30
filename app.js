const age = parseInt(prompt("How old are you?"));

console.log(age, isNaN(age));

if (isNaN(age) ){
    console.log("please write a number");
}else{
    console.log("Thank you for writing your age.")
}