var i = 0;
var images = [];

images[0] = 'img/image01.jpg';
images[1] = 'img/image02.jpg';
images[2] = 'img/image03.jpg';
images[3] = 'img/image04.jpg';

function changeImg() {

	document.slide.src = images[i];

		if (i < images.length - 1) {
			i++;
		} else {
			i = 0;
		}

		changeImg1();
		changeImg2();	
		changeImg3();

	setTimeout("changeImg()", 2000);	
}

window.onload = changeImg;

	

function changeImg1() {

	var j = 0;

		if (j < images.length - 1) {
			j = i;
		} else {
			j = 0;
		}
	document.slide1.src = images[j];


}

function changeImg2() {

	var z = 0;

		if (i < images.length - 1) {
			z = i + 1;
		} else {
			z = 0;
		}
	document.slide2.src = images[z];

	
}

function changeImg3() {

	var k = 0;

		if (i < 2) {

			k = images.length - 2 + i;
			
			
		} else {
			k = i - 2;
			
		}
	document.slide3.src = images[k];

}