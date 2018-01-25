<template>
	<div class="goods-child">
		<div class="g-img"></div>
		<div class="g-content">
			<a class="g-name">{{gname}}</a>
			<span class="g-detail">更多参数&raquo;</span>
			<p class="g-price">￥{{gprice}}</p>
			<slot name="sbtn"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'gname',
			'gprice'
		]
	}
</script>

<style>
	.goods-child{
		padding: 10px;
		width: 96%;
		height: 100px;
		border-bottom: 1px solid #ddd;
	}
	.g-img{
		width: 100px;
		height: 100px;
		border: 1px solid #000;
		float: left;
	}
	.g-content{
		width: 350px;
		height: 100px;
		float: right;
		margin: 10px;
		border: 1px solid #fff;
		position: relative;
		left: 0;
		top: 0;
	}
	.g-name{
		display: block;
		cursor: pointer;
	}
	.g-name:link, .g-name:hover{
		color: orange;
	}
	.g-detail{
		font-size: 14px;
		color: #288bde;
		cursor: pointer;
	}
	.g-price{
		display: inline-block;
		margin: 0;
		position: absolute;
		right: 30px;
		top: 20px;
		font-size: 20px;
		color: red;
	}
</style>