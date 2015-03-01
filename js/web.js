/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-03-01 16:20:53
 * @version $Id$
 */
function Web(img, w, h, x, y, sx, sy){
	this.img = img;
	this.x = x;
	this.y =y;
	this.w = w;
	this.h = w;
	this.sx = sx;
	this.sy = sy;

	this.scale = 0.5;
}
Web.prototype.draw = function(gd){
	gd.save();

	gd.translate(this.x, this.y);
	gd.scale(this.scale, this.scale)
	gd.drawImage(this.img, this.sx, this.sy, this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);

	gd.restore();

};