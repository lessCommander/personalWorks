<template>
	<div class="homeicon-wrap">
		<div>
			<img :src="homeiconimg" alt="">
		</div>
		<div class="homeicon-wrap-name">书城</div>
	</div>
</template>

<script>
	export default {
		props:[
			'homeiconimg'
		]
	}
</script>

<style scoped>
	.homeicon-wrap-name{
		width: 39px;
		text-align: center;
	}
</style>