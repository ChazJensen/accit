const imgEl = document.querySelector("#imgHold");
const nameEl = document.getElementById("dogName");
const breedEl = document.getElementById("dogBreed");
const colorEl = document.getElementById("dogColor");
const dogDescEls = document.querySelectorAll("span");

var dispDog = cnt => {
	let dog = dogs[cnt];
	imgEl.src = dog.imgSrc;
	nameEl.textContent = dog.name;
	breedEl.textContent = dog.breed;
	colorEl.textContent = dog.color;
	return cnt;
}

var next = _ => {
	if (dgNum >= dogs.length - 1) dgNum = 0;
	dgNum = dispDog(dgNum + 1);
}

var prev = _ => {
	if (dgNum <= 0) dgNum = dogs.length;
	dgNum = dispDog(dgNum - 1);
}

var dgNum = 0;

dgNum = dispDog(dgNum);