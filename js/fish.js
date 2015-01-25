/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-25 23:16:32
 * @version $Id$
 */

function Fish(img, w, h, nowFrame, maxFrame){
	this.img = img;

	this.w = w;
	this.h = h;

	this.x = 0;
	this.y = 0;

	this.nowFrame = nowFrame;
	this.maxFrame = maxFrame;

	this.speed = Math.random()*3+1;
	this.rotate = Math.random()*120 - 60;

}
Fish.prototype.draw = function(gd){
	gd.save();
	gd.translate(this.x, this.y);
	gd.rotate(d2a(this.rotate));
	gd.drawImage(this.img, 0, this.h*this.nowFrame, this.w, this.h, this.w/2, this.h/2, this.w, this.h);

	gd.restore();
	// console.log('draw')
};
Fish.prototype.move = function(gd){
	this.x += this.speed;

	this.y += this.speed*Math.sin(d2a(this.rotate));
	
};
Fish.prototype.nextFrame = function() {
	this.nowFrame ++ ;
	if(this.nowFrame == this.maxFrame ){
		this.nowFrame = 0;
	}
};