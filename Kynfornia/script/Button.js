/*THIS WILL SOON MANAGE BUTTONS ON THE SAME PREMISE AS THE TEMPLOADER
  BUTTONS WILL BECOME A CLASS THAT I CAN ATTATCH TO A CLASS CALLED "feed-div"
	CREATED IN ORDER TO MAKE SURE THE "SHOW MORE" BUTTONS ONLY SHOW UP
	WHEN THE NEED TO
*/

// gather all board's "show more" buttons
// loop through boardEls and add an event listener for a click and change some specific board properties according to the button clicked
function loadButtons(boardEls, articles) {
	const boardButtons = document.getElementsByClassName("board-button");
	Object.keys(boardButtons).forEach(key => {
		let btn = boardButtons[key];
		let containerDiv = boardEls[key];
		// assign each button a unique function according to their ID
		// changes the state of the div depending on the click
		btn.addEventListener("click", _ => {
			if (containerDiv.style.overflowY == "scroll") {
				containerDiv.style.overflowY = "hidden";
				containerDiv.style.height = "200px";
				btn.childNodes[0].textContent = "Show More";
			} else {
				containerDiv.style.overflowY = "scroll";
				containerDiv.style.height = "500px";
				btn.childNodes[0].textContent = "Show Less";
			}
		});
	});
}