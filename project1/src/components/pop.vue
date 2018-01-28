<template>
	<div class="popWrap">
		<ul>
			<li
				v-for="n in nums"
				@click="clickNum(n)"
			>{{n}}</li>
		</ul>
		<i class="arrow">
			<img src="../assets/arrow.png" alt="">
		</i>
	</div>
</template>

<script>
	import Event1 from '../router/bus.js'
	export default {
		data(){
			return {
				nums: [1,2,3,4,5,6,7,8,9]
			}
		},
		methods: {
			clickNum(n){
				Event1.$emit('selNum', n);
			}
		}
	}
</script>

<style>
	.popWrap > ul{
		margin: 0;
		list-style: none;
		width: 98px;
		height: 98px;
		border: 1px solid #eee;
		background-color: #fff;
		position: relative;
	}
	.popWrap > ul > li{
		float: left;
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		margin: 2px 0 0 2px;
		background-color: #eee;
		cursor: pointer;
	}
	.popWrap > ul > li:hover{
		color: #eee;
		background-color: #288bde;
	}
	.arrow{
		position: absolute;
		left: 44px;
		top: -16px;
		border: none;
	}
</style>