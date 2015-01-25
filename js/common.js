/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-01-26 00:42:10
 * @version $Id$
 */
function loadImages(arr, fn, fnError){
	var count = 0;
	var json = {};

	for(var i=0;i<arr.length;i++){
		var oImg = new Image();
		(function(index){
			oImg.onload = function(){
				var name = arr[index].split('.')[0];
				json[name] = this;
				count ++ ;
				if(count === arr.length){
					fn(json);
				}

				oImg.onerror = function(){
					fnError && fnError();
				};
			}
			
		})(i);
		oImg.src='images/'+arr[i];
	}
}

function d2a(deg){
	return deg*Math.PI/180;
}

function a2d(arc){
	return arc*180/Math.PI;
}