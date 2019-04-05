var slideshow = {
	photoList: [
		'img1.jpg',
		'img2.jpg',
		'img3.jpg'
	],
	currentPhotoIndex: -1,
	nextPhoto: function() {
		if(this.currentPhotoIndex >= this.photoList.length - 1) {
            this.currentPhotoIndex = this.photoList.length;
            console.log('End of slideshow');
            this.pause();
		} else {
			this.currentPhotoIndex++;
			console.log(this.photoList[this.currentPhotoIndex]);
		}
	},
	prevPhoto: function() {
		if(this.currentPhotoIndex <= 0) {
            this.currentPhotoIndex = -1;
            console.log('Beginning of slideshow');
            this.pause();
		} else {
			this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
		}
	},
	getCurrentPhoto: function() {
		return this.photoList[this.currentPhotoIndex]
    },
    playInterval: null,
    play: function() {
        this.pause(); // Added this to allow switching direction at any time.
        this.playInterval = setInterval(this.nextPhoto.bind(this), 2000);
    },
    pause: function() {
        clearInterval(this.playInterval);
    },
    playReverse: function() {
        this.pause();
        this.playInterval = setInterval(this.prevPhoto.bind(this), 2000);
    }
}

slideshow.play();
setTimeout(slideshow.playReverse.bind(slideshow), 4500);