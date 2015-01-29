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

function isNotInScreen(w, h, obj, padding){
	if(obj.x< -padding || obj.x>w+padding || obj.y < -padding || obj.y > h+padding){
		return true;
	}else{
		return false;
	}
}

function testCircle(obj1, obj2){
	var x = obj1.x - obj2.x;
	var y = obj1.y - obj2.y;

	var dis = Math.sqrt(x*x + y*y);


	if(dis <= obj1.w/2+obj2.w/2){
		return true;
	}
	else{
		return false;
	}
}