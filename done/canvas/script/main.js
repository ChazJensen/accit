var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

// next make draggable
window.onload = () => {
	for (let x = 0; x < canvas.width; x += bg_img.width) {
		for (let y = 0; y < canvas.height; y += bg_img.height) {
			ctx.drawImage(bg_img, x, y);
		}
	}
}