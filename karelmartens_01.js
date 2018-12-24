/* http://www.penccil.com/presentation.php?show=9696&p=#/section-4/page-5 */

var canvas = document.querySelector('canvas');

cw = canvas.width;
ch = canvas.height;

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
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = colors[0];
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// var tex = new Image();
	// tex.src = 'tex.jpg';

	var noise = document.createElement('div');
	noise.classList.add('noise');
	cover.appendChild(noise);

	for (var i = 0; i < 2; i++) {
		for (var j = 0; j < 3; j++) {
			ctx.beginPath();
			ctx.globalAlpha = getRand(5, 10) / 10;
			let x = (cw / 3) * (i + 1);
			let y = ch / 2;
			let rad = getRand(10, ch / 3);
			let sa = 0;
			let ea = 2 * Math.PI;
			ctx.arc(x, y, rad, sa, ea);
			ctx.lineWidth = getRand(ch / 8, ch / 4);
			ctx.strokeStyle = colors[(0, getRand(1, colors.length))];
			ctx.stroke();
		}
	}
}

function getRand(min = 0, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
