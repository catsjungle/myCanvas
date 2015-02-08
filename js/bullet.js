/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-29 22:27:17
 * @version $Id$
 */

function Bullet(img, sx, sy, w, h){
	this.img = img;

	this.w = w;
	this.h = h;

	this.x = 442 ;
	this.y = 600 - 30;

	this.sx = sx;
	this.sy = sy;

	this.rotate = 0;
	this.speed = 6;
}

Bullet.prototype.draw = function(gd){
	gd.save();

	gd.translate(this.x, this.y)
	gd.rotate(d2a(this.rotate));

	gd.drawImage(this.img, this.sx, this.sy, this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);
	gd.restore();
};

Bullet.prototype.move = function(){
	this.x += this.speed*Math.sin(d2a(this.rotate));
	this.y -= this.speed*Math.cos(d2a(this.rotate));
};