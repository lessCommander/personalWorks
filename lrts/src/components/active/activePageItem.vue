<template>
	<div class="a-page-item">
		<div class="h4">
			{{aItemTitle}}
		</div>
		<div class="a-info">
			<img src="../../assets/img/active_icon1.png">
			<span class="a-item-time">{{aItemTime}}</span>
		</div>
		<div class="a-banner">
			<img src="../../assets/img/active_banner1.png">
		</div>
		<div class="a-content">
			{{aItemContent}}
		</div>
	</div>
</template>

<script>
	export default{
		props:[
			'aItemTitle',
			'aItemTime',
			'aItemContent'
		]
	}
</script>

<style scoped>
	.a-page-item{
		margin: 8px 6px;
		padding: 10px;
		background-color: #fff;
	}
	.a-info, .a-banner{
		margin-top: 10px;
	}
	.a-info span{
		color: #aaa;
		font-size: 14px;
		vertical-align: middle;
	}
	.a-banner{
		text-align: center;
	}
	.a-content{
		margin: 20px 0;
		text-indent: 2em;
		font-size: 14px;
	}
</style>