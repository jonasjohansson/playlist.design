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
		}
	});
}

function getStyle(el, prop) {
	let val = window.getComputedStyle(el, null).getPropertyValue(prop);
	return parseInt(val);
}
