<template>
	<div class="public-title">
		<router-link to="/">
			<a class="p-back" href="#">
				<span class="p-lt"></span>
			</a>
		</router-link>
		<div class="p-name">
			{{pname}}
		</div>
		<a href="#" @click.prevent="showAsideBar(true)">
			<button
				class="navbar-toggle p-btn"
				type="button"
			>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
	        </button>
	    </a>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'

	export default{
		props:[
			'pname'
		],
		methods:mapActions([
			'showAsideBar'
		])
	}
</script>

<style scoped>
	.public-title{
		height: 47px;
		color: #fff;
		background-color: #fc6520;
		display: flex;
		font-size: 18px;
	}
	.p-back, .p-name, .p-btn{
		display: block;
		text-align: center;
		line-height: 47px;
	}
	.p-back{
		color: #fff;
		width: 50px;
	}
	.p-back > .p-lt{
		display: inline-block;
		width: 15px;
		height: 15px;
		border-left: 2px solid #fff;
		border-bottom: 2px solid #fff;
		transform: rotateZ(45deg) translate(3px,0px);
	}
	.p-name{
		flex: 1;
		text-align: center;
	}
	.p-btn .icon-bar{
		background-color: #fff;
	}
</style>