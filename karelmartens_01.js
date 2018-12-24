const cw = 600 || window.innerWidth;
const ch = 600 || window.innerHeight;

// var canvas = document.createElement('canvas');
var canvas = document.querySelector('canvas');
canvas.width = cw;
canvas.height = ch;

var colors = ['#fdd6d6', '#fab83e', '#eb6855', '#44a988', '#0295a8'];

fetch('color_palettes.json')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		colors = data[getRand(0, data.length)];
		draw();
	});

function draw() {
	// document.body.appendChild(canvas);
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = colors[0];
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	var tex = new Image();
	tex.src = 'tex.jpg';

	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 3; j++) {
			ctx.beginPath();
			ctx.globalAlpha = getRand(5, 10) / 10;
			ctx.arc((cw / 3) * (i + 1), ch / 2, getRand(40, ch / 3), 0, 2 * Math.PI);
			ctx.lineWidth = getRand(ch / 8, ch / 4);
			ctx.strokeStyle = colors[(0, getRand(1, colors.length))];
			ctx.stroke();
		}
	}
}

function getRand(min = 0, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
