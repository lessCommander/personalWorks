window.onload = function(){
	var aTitle = document.querySelectorAll('.pro_title li'),
		aLi1 = document.querySelectorAll('.item'),
		i,
		iCurrent = 0;

	for(i = 0; i < aTitle.length; i++){
		aTitle[i].index = i;
	}

	for(i = 0; i < aTitle.length; i++){
		aTitle[i].onmouseenter = function(){
			this.className = 'pro_title_active';
		};
		aTitle[i].onmouseleave = function(){
			this.className = '';
			aTitle[iCurrent].className = 'pro_title_active';
		};
		aTitle[i].onclick = function(){
			aTitle[iCurrent].className = '';
			this.className = 'pro_title_active';
			iCurrent = this.index;
		};
	}

	for(i = 0; i < aLi1.length; i++){
		aLi1[i].onmouseenter = function(){
			this.className = this.className + ' ' + 'active';
		};
		aLi1[i].onmouseleave = function(){
			this.className = 'item';
		};
	}
};