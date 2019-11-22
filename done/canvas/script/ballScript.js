var canvas = document.getElementById('ballCanv');
var ctx = canvas.getContext('2d');
var running = true;
var raf;

var background = () => {
	ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
	ctx.fillRect(0,0, canvas.width, canvas.height);
}
	

var ball = {
	x: 100,
	y: 100,
	vx:  4,
	vy:  5,
	rad: 25,
	color: 'black',
	draw: function() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	},
	move: function() {
		let xBoundRight = this.x + this.rad;
		let xBoundLeft = this.x - this.rad;
		let yBoundTop = this.y - this.rad;
		let yBoundBottom = this.y + this.rad;
		
		this.vy = this.vy * .99 + .95;
		
		if (xBoundRight > canvas.width || xBoundLeft < 0) {
			// when ball tries to leave x domain
			this.vx = -this.vx;
		}
		if (yBoundBottom > canvas.height) {
			// when ball tries to leave y range
			this.vy = -this.vy * .7;
			this.vx *= 0.89
		}
		
		// velocity
		this.x += this.vx;
		this.y += this.vy;
	}
};

var mouseVec = {
	oldX:		0,
	oldY:		0,
	newX:		0,
	newY:		0,
	deltaX: 0,
	deltaY: 0,
	updateSecant: function(x, y) {
		this.oldX = this.newX;
		this.newX = x;
		this.updateDeltaX();
		this.oldY = this.newY;
		this.newY = y;
		this.updateDeltaY();
	},
	updateDeltaX: function() {
		this.deltaX = this.newX - this.oldX;
	},
	updateDeltaY: function() {
		this.deltaY = this.newY - this.oldY;
	},
	get secantVectorCompX() {
		return this.deltaX;
	},
	get secantVectorCompY() {
		return this.deltaY;
	}
};

canvas.addEventListener('mousedown', e => {
	ball.x = e.clientX;
	ball.y = e.clientY;
	mouseVec.deltaX = 0;
	mouseVec.deltaY = 0;
	running = false;
});

canvas.addEventListener('mousemove', e => {
	if (!running) {
		ball.x = e.clientX;
		ball.y = e.clientY;
		
		// constantly call to update / calculate velocity of mouse
		mouseVec.updateSecant(e.clientX, e.clientY);
	}
});

canvas.addEventListener('mouseup', e => {
	
	// update velocity vectors
	ball.vx = mouseVec.secantVectorCompX;
	ball.vy = mouseVec.secantVectorCompY;
	running = true;
});

function draw() {
	background();
	ball.draw();
	if (running) {
		ball.move();
	}
	raf = window.requestAnimationFrame(draw);
}

window.onload = () => {
	draw();
};