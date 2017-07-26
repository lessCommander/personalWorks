window.onload = function(){
	var aLi1 = document.querySelectorAll('.item');

	for(var i = 0; i < aLi1.length; i++){
		aLi1[i].onmouseenter = function(){
			this.className = this.className + ' ' + 'active';
		};
		aLi1[i].onmouseleave = function(){
			this.className = 'item';
		};
	}
};