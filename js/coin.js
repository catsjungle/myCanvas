/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-02-08 21:03:40
 * @version $Id$
 */

function Coin(img, w, h, x, y, target_x, target_y, maxFrame){
	this.img = img;
	this.x = x;
	this.y = y;

	this.w = w;
	this.h = h;

	this.start_x = x;
	this.start_y = y;

	this.target_x = target_x;
	this.target_y = target_y;

	this.nowFrame = 1;
	this.maxFrame = maxFrame;

	this.n = 0;
}

Coin.prototype.draw = function(gd){

	gd.save();

	gd.translate(this.x, this.y);
	gd.drawImage(this.img, 0, this.nowFrame*this.h, this.w, this.h, -this.w/2, -this.h/2, this.w, this.h);

	gd.restore();
};

Coin.prototype.move = function(){
	this.n ++;

	var disX = this.target_x - this.start_x;
	var disY = this.target_y - this.start_y;

	this.x = this.start_x + disX*this.n/30;
	this.y = this.start_y + disY*this.n/30;
	
};

Coin.prototype.nextFrame = function(){
	this.nowFrame ++;
	if(this.nowFrame >= this.maxFrame){
		this.nowFrame = 1;
	}
};