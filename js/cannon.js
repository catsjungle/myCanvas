/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-28 23:03:05
 * @version $Id$
 */
function Cannon(img, w, h){

	this.img = img;

	this.w = w;
	this.h = h;

	this.x = 405+this.w/2;
	this.y = 600-30;

	this.rotate = 0;
}

Cannon.prototype.draw = function(gd){
	gd.save();

	gd.translate(this.x, this.y);
	
	gd.rotate(d2a(this.rotate));
	
	

	gd.drawImage(this.img, 0, 0, this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);

	gd.restore();
};