var btns = document.querySelectorAll('button');
var cover = document.querySelector('#cover');
var textarea = document.querySelector('textarea');
for (let btn of btns) {
	btn.addEventListener('click', e => {
		switch (btn.className) {
			case 'increase':
				var fontSize = getStyle(textarea, 'font-size');
				fontSize *= 1.1;
				textarea.style.fontSize = fontSize + 'px';
				break;
			case 'decrease':
				var fontSize = getStyle(textarea, 'font-size');
				fontSize *= 0.9;
				textarea.style.fontSize = fontSize + 'px';
				break;
			case 'align-left':
				cover.style.textAlign = 'left';
				break;
			case 'align-center':
				cover.style.textAlign = 'center';
				break;
			case 'align-right':
				cover.style.textAlign = 'right';
				break;
			case 'text-serif':
				cover.setAttribute('data-font', 'serif');
				break;
			case 'text-sans-serif':
				cover.setAttribute('data-font', 'sans-serif');
				break;
			case 'text-mono':
				cover.setAttribute('data-font', 'mono');
				break;
			case 'reload':
				draw();
				break;
			case 'color':
				updateColors();
				break;
			case 'download':
				let dataUrl = document.querySelector('canvas').toDataURL('image/png');
				domtoimage
					.toPng(cover)
					.then(function(dataUrl) {
						var link = document.createElement('a');
						link.download = `test.png`;
						link.href = dataUrl;
						link.click();
					})
					.catch(function(error) {
						console.error(error);
					});
				break;
		}
	});
}

// textarea.addEventListener('keydown', autosize);

function autosize() {
	var el = this;
	setTimeout(function() {
		el.style.cssText = 'height:auto;padding:0';
		el.style.cssText = 'height:' + el.scrollHeight + 'px';
	}, 0);
}

function getStyle(el, prop) {
	let val = window.getComputedStyle(el, null).getPropertyValue(prop);
	return parseInt(val);
}
