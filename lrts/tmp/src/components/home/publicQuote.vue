<template>
	<div class="public-quote">
		<div class="quo-txt">{{quotetxt}}</div>
		<a class="quo-more" href="javascript:">更多</a>
	</div>
</template>

<script>
	export default{
		props:[
			'quotetxt'
		]
	}
</script>

<style scoped>
	.public-quote{
		position: relative;
		margin: 16px 8px;
	}
	.public-quote:before{
		content: '';
		position: absolute;
		top: 12px;
		left: 0;
		width: 100%;
		border-bottom: 1px solid #f1f1f1;
	}
	.quo-txt{
		display: inline-block;
		padding: 2px 6px;
		border-radius: 15px;
		color: #fff;
		background-color: #fc6520;
		position: relative;
		z-index: 10;
	}
	a, a:hover{
		text-decoration: none;
	}
	.quo-more{
		float: right;
		position: relative;
		top: 2px;
		color: #666;
		background-color: #fff;
		padding: 0 5px;
		z-index: 10;
	}
</style>