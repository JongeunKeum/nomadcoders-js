/********** #6.1 **********/

const images = [
	"butterfly.jpeg",
	"flower.jpeg",
	"sunset.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
