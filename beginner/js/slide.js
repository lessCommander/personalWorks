$(function(){
	var $oSlide = $('div.slide'),
		$oDiv = $('#list'),
		$oUl = $('#list>ul').eq(0),
		$aLi = $oUl.find('li'),
		len = $aLi.length,
		iLiW = $aLi.eq(0).outerWidth(true),
		$oBg = $('#bg'),
		$oTxt = $('#txt').find('a').eq(0),
		$oBtnL = $('#btn-l'),
		$oBtnR = $('#btn-r');

	var oSlide = {
		id : 0,
		iLeftStep: 0,
		aLi : {
			aLeft : [],
			aTop : []
		},
		aTxt :  ['《武则天秘史》[至22集]姐姐与皇上偷情，媚娘抓奸在床...',
				'《无底洞》金钱、美女、权利、复仇等欲望让人不可自拔...',
				'《巴黎宝贝》邓超巴黎当奶爸，上演基情、卖萌、跨国恋..',
				'《我的女儿是花儿》[至3集]“富二代”冰王子恋上贫家女..',
				'《法证先锋3》[至26集]写字楼惊现“女僵尸”尸体！',
				'《非常了得》孟非郭德纲大曝台下私生活，内地Hold姐来挑战',
				'第二届九分钟电影11月20日独家首映 视觉盛宴恭迎各位看官',
				'《快女微电影》 洪辰脸伤痊愈 快女微电影收官作复拍',
				'《称心如意》京城第一“育婴男”Hold住全场 萝莉热舞走光',
				'《男人帮》[全30集]悲喜双响炮，一个完美结局'],
		btnEn : {'opacity':'1', 'cursor': 'pointer'},
		btnDis : {'opacity':'0.5', 'cursor': 'default'},
		timer: null
	};

	//阻止默认选中
	$(document).on('selectstart', fnDefault);
	$(document).on('dragstart', fnDefault);
	function fnDefault(){
		return false;
	}

	//计算ul宽度
	$oUl.width($aLi.eq(0).outerWidth(true) * len);

	//添加列表点击事件
	for(var i = 0; i<len; i++){
		(function(n){
			$aLi.eq(n).on('click', fnChangeImg.bind(this, n));
		})(i);
	}

	//图片切换
	function fnChangeImg(index){
		$aLi.eq(oSlide.id).removeClass('active');
		$aLi.eq(index).addClass('active');
		oSlide.id = index;
		$oTxt.html(oSlide.aTxt[index]);
		$oBg.stop(true);
		$oBg.fadeOut(300, 'linear' , function(){
			$oBg.find('img').eq(0).attr('src', 'img/pic_' + (index + 1) + '.jpg');
			$oBg.fadeIn(300);
		});
	}

	//左右点击事件
	$oBtnL.on('click', fnClickLeft);
	$oBtnR.on('click', fnClickRight);
	function fnClickLeft(){
		if (oSlide.iLeftStep > 0){
			oSlide.iLeftStep--;
			fnMoveUl(oSlide.iLeftStep);
		}
	}
	function fnClickRight(){
		if (oSlide.iLeftStep < len - 7){
			oSlide.iLeftStep++;
			fnMoveUl(oSlide.iLeftStep);
		}
	}

	//移动Ul
	function fnMoveUl(n){
		n > 0 ? $oBtnL.css(oSlide.btnEn) : $oBtnL.css(oSlide.btnDis);
		n < len - 7 ? $oBtnR.css(oSlide.btnEn) : $oBtnR.css(oSlide.btnDis);
		$oUl.animate({'left': -iLiW * n});
	}

	
	//自动循环滚动
	function fnAutoPlay(){
		clearInterval(oSlide.timer);
		oSlide.timer = setInterval(function(){
			if(oSlide.id + 1 >= len){
				oSlide.iLeftStep = 0;
				fnMoveUl(oSlide.iLeftStep);
				fnChangeImg(0);
				return false;
			}
			if(oSlide.id + 1 >= oSlide.iLeftStep + 7){
				oSlide.iLeftStep++;
				fnMoveUl(oSlide.iLeftStep);
			}

			fnChangeImg(oSlide.id + 1);
		}, 2000);
		
	}

	fnAutoPlay();

	//移入移出
	$oSlide.on('mouseover', function(){clearInterval(oSlide.timer);});
	$oSlide.on('mouseout', function(){fnAutoPlay();});

});