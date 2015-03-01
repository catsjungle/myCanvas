/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-02 00:59:11
 * @version $Id$
 */
function Dead_fish(img, w, h, x, y, rotate, maxFrame){
	this.img = img;
	this.w = w;
	this.h = h;
	this.x = x;
	this.y = y;
	this.rotate = rotate;
	this.nowFrame = 0;
	this.maxFrame = 4;
}

Dead_fish.prototype.draw = function (gd){
	gd.save();
	gd.translate(this.x, this.y);
	gd.rotate(d2a(this.rotate));
	if(Math.abs(this.rotate)>90){
		gd.scale(1, -1);
	}
	gd.drawImage(this.img, 0, this.h*(this.nowFrame+4), this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);
	gd.restore();
};

Dead_fish.prototype.nextFrame = function(){
	this.nowFrame ++;
	if(this.nowFrame >=this.maxFrame){
		this.nowFrame = 0;
	}
};