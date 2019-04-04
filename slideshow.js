var slideshow = {
	photoList: [
		'img1.jpg',
		'img2.jpg',
		'img3.jpg'
	],
	currentPhotoIndex: -1, // -1 lets nextPhoto start at the first photo.
	nextPhoto: function() {
		if(this.currentPhotoIndex >= this.photoList.length - 1) {
			this.currentPhotoIndex = this.photoList.length; // Lets prevPhoto start at the last photo.
			console.log('End of slideshow');
		} else {
			this.currentPhotoIndex++;
			console.log(this.photoList[this.currentPhotoIndex]);
		}
	},
	prevPhoto: function() {
		if(this.currentPhotoIndex <= 0) {
			this.currentPhotoIndex = -1; // Lets nextPhoto start at the first photo.
			console.log('Beginning of slideshow');
		} else {
			this.currentPhotoIndex--;
			console.log(this.photoList[this.currentPhotoIndex]);
		}
	},
	getCurrentPhoto: function() {
		return this.photoList[this.currentPhotoIndex]
	}
}