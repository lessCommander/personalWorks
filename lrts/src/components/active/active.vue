<template>
	<div class="active-main">
		<div class="a-title">
			<span class="a-title-txt">懒人听书官方博客</span>
		</div>
		<div class="a-nav">
			
		</div>
		<div class="a-content">
			
			<div class="a-content-pagination">
				<ul class="pagination">
					<li><a href="javascript:#">1</a></li>
					<li><a href="javascript:#">2</a></li>
					<li><a href="javascript:#">3</a></li>
					<li><a href="javascript:#">4</a></li>
					<li><a href="javascript:#">5</a></li>
					<li><a href="javascript:#">6</a></li>
					<li><a href="javascript:#">7</a></li>
					<li><a href="javascript:#">8</a></li>
					<li><a href="javascript:#">9</a></li>
					<li><a href="javascript:#">10</a></li>
					<li><a href="javascript:#">&raquo;</a></li>
				</ul>
			</div>
		</div>
		<div class="a-search">
			<div class="a-search-wrap">
				<input class="a-footer-input" type="text" placeholder="搜索关键词...">
				<span class="a-footer-btn">
					搜索博客
				</span>
			</div>
		</div>
		<div class="a-footer">
			<div class="a-footer-imgarea">
				<img src="../../assets/img/active_footer_banner1.png">
				<img src="../../assets/img/active_footer_banner2.png">
			</div>
			<p class="a-footer-txt">&copy;2012-2015 懒人听书版权所有</p>
		</div>
	</div>
</template>

<style scoped>
	.active-main{
		background-color: #eee;
	}
	/*标题*/
	.a-title{
		text-align: center;
		background-color: #fc6520;
		height: 46px;
		line-height: 46px;
	}
	.a-title-txt{
		font-size: 16px;
		color: #fff;
	}
	/*内容*/

	.a-content-pagination{
		padding: 0 15px;
	}
	.a-content-pagination .pagination a{
		color: #fc6520;
	}
	/*搜索*/
	.a-search{
		height: 56px;
		margin: 7px;
		padding: 8px;
		background-color: #fff;
	}
	.a-search-wrap{
		height: 36px;
		box-sizing: border-box;
	}
	/*页脚*/
	.a-footer-input{
		outline: none;
		border: 2px solid #c1c1c1;
		width: 70%;
		height: 36px;
		float: left;
		color: #999;
		font-size: 14px;
		padding-left: 7px;
		background-color: transparent;
	}
	.a-footer-btn{
		height: 36px;
		width: 28%;
		text-align: center;
		line-height: 36px;
		float: right;
		background-color: #fc6520;
		color: #fff;
		font-size: 14px;
	}
	.a-footer{
		margin-top: 7px;
		padding: 30px;
		background-color: #fc6520;
		height: 130px;
		text-align: center;
	}
	.a-footer-imgarea img+img{
		margin-left: 30px;
	}
	.a-footer-txt{
		margin-top: 10px;
		color: #fff;
	}
</style>