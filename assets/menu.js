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
			case 'font-small':
				cover.setAttribute('data-size', 'small');
				break;
			case 'font-medium':
				cover.setAttribute('data-size', 'medium');
				break;
			case 'font-large':
				cover.setAttribute('data-size', 'large');
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
			case 'font-serif':
				cover.setAttribute('data-font', 'serif');
				break;
			case 'font-monospace':
				cover.setAttribute('data-font', 'monospace');
				break;
		}
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
