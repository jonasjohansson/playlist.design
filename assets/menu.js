var btns = document.querySelectorAll('button');
var cover = document.querySelector('#cover');
var textarea = document.querySelector('textarea');

autosize(textarea);

for (let btn of btns) {
	btn.addEventListener('click', e => {
		switch (btn.className) {
			case 'download':
				download();
				break;
			case 'random':
				random();
				break;
			case 'font-s':
				cover.setAttribute('data-size', 's');
				break;
			case 'font-m':
				cover.setAttribute('data-size', 'm');
				break;
			case 'font-l':
				cover.setAttribute('data-size', 'l');
				break;
			case 'font-xl':
				cover.setAttribute('data-size', 'xl');
				break;
			case 'align-left':
				cover.setAttribute('data-align', 'left');
				break;
			case 'align-center':
				cover.setAttribute('data-align', 'center');
				break;
			case 'align-right':
				cover.setAttribute('data-align', 'right');
				break;
			case 'font-sans-serif':
				cover.setAttribute('data-font', 'sans-serif');
				break;
			case 'font-monospace':
				cover.setAttribute('data-font', 'monospace');
				break;
		}
		textarea.style.height = 'auto';
		autosize(textarea);
	});
}

function download() {
	domtoimage
		.toJpeg(cover, { quality: 1.0 })
		.then(function(dataUrl) {
			var link = document.createElement('a');
			link.download = `cover-${textarea.value}.jpeg`;
			link.href = dataUrl;
			link.click();
		})
		.catch(function(error) {
			console.error(error);
		});
}
