<template>
	<div class="homeicons">
		<ul>
			<li>
				<homeiconChild homeiconimg="../src/assets/img/home_bookcity.png"></homeiconChild>
			</li>
			<li>
				<homeiconChild homeiconimg="../src/assets/img/home_bookcity.png"></homeiconChild>
			</li>
			<li>
				<homeiconChild homeiconimg="../src/assets/img/home_bookcity.png"></homeiconChild>
			</li>
			<li>
				<homeiconChild homeiconimg="../src/assets/img/home_bookcity.png"></homeiconChild>
			</li>
		</ul>
	</div>
</template>

<script>
	import homeiconChild from './homeiconChild'

	export default {
		components: {
			homeiconChild
		}
	}
</script>

<style>
	.homeicons > ul{
		list-style: none;
		background-color: #eee;
	}
	.homeicons > ul > li{
		float: left;
		background-color: pink;
	}
</style>