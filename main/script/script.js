var dd = document.getElementById("dropdown").childNodes[3];
function setupDropdown() {
	dd.style.display = "none";
	document.getElementById("ddBtn").addEventListener("click", () => {
		if (dd.style.display == "none") { dd.style.display = "block";}
		else if (dd.style.display == "block") {dd.style.display = "none";}
	});
}

function main() {
	setupDropdown();
}

window.onload = main();