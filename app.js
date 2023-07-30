const age = parseInt(prompt("How old are you?"));

console.log(age, isNaN(age));

if (isNaN(age) || age < 0){
    console.log("please write a real positive number");
}else if (age < 18){
    console.log("You are too young");
}else if (age >= 18 && age <= 50){
    console.log("You can drink.");
}else if (age > 50 && age <= 80){
    console.log("you should exercise.");
}else if (age > 80){
    console.log("You can do whatever you want.");
}