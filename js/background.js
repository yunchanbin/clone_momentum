const images = ["back0.jpg", "back1.jpg", "back2.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];0

const bgImage = document.createElement("img");

bgImage.src = `assets/img/${chosenImages}`;

document.body.appendChild(bgImage);

console.log(bgImage);


