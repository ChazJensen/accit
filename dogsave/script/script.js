const imgEl = document.querySelector("#imgHold");
const nameEl = document.getElementById("dogName");
const breedEl = document.getElementById("dogBreed");
const colorEl = document.getElementById("dogColor");
const dogDescEls = document.querySelectorAll("span");

const img = {
	
};

var theOldWay = function() {
	imgEl.src = "images/dog1.jfif";
	nameEl.textContent = "Jerry";
	breedEl.textContent = "Unknown";
	colorEl.textContent = "Unknown";
}

// theOldWay();


var d1Desc = ["images/dog1.jfif", "jerry", "labradoodle", "gold"];
var withAnArray = _ => {
	imgEl.src=d1Desc[0];
	d1Desc.forEach((i, indx) => {
		console.log(indx);
		if (indx != 0) dogDescEls[indx] = i;
	});
};

// withAnArray();

// json!!!
var dog1 = {
	name: "Jerry",
	breed: "Labradoodle",
	color: "golden",
	imgSrc: "images/dog1.jfif"
}

var showDog1 = _ => {
	imgEl.src = dog1.imgSrc;
	nameEl.textContent = dog1.name;
	breedEl.textContent = dog1.breed;
	colorEl.textContent = dog1.color;
}

var dogs = [
	{
		name: "Jerry",
		breed: "Labradoodle",
		color: "golden",
		imgSrc: "images/dog1.jfif"
	},
	{
		name: "Jamal",
		breed: "Pug",
		color: "Grey/Black",
		imgSrc: "images/dog2.jfif"
	},
	{
		name: "Dorl",
		breed: "Something",
		color: "Grey/pink",
		imgSrc: "images/dog3.jfif"
	}
];

var JSONdogs = {
	jerry: {
		name: "Jerry",
		breed: "Labradoodle",
		color: "golden",
		imgSrc: "images/dog1.jfif"
	},
	jamal: {
		name: "Jamal",
		breed: "Pug",
		color: "Grey/Black",
		imgSrc: "images/dog2.jfif"
	},
	dorl: {
		name: "Dorl",
		breed: "Something",
		color: "Grey/pink",
		imgSrc: "images/dog3.jfif"
	}
};

var dispDog = cnt => {
	let dg = dogs[cnt];
	imgEl.src = dg.imgSrc;
	nameEl.textContent = dg.name;
	breedEl.textContent = dg.breed;
	colorEl.textContent = dg.color;
}

var dispDogObjs = obj => {
	imgEl.src = obj.imgSrc;
	nameEl.textContent = obj.name;
	breedEl.textContent = obj.breed;
	colorEl.textContent = obj.color;
}
