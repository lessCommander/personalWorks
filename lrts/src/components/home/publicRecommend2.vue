<template>
	<div class="recommend2-inner">
		<ul>
			<li v-for="item in recommend2arr">
				<a href="#">
					<div class="recommend2-img">
						<img :src="item.img" alt="">
					</div>
					<div class="recommend2-title">
						{{item.txt}}
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:[
			'recommend2arr'
		]
	}
</script>

<style scoped>
	.recommend2-inner > ul{
		list-style: none;
	}
	.recommend2-inner > ul > li{
		float: left;
		margin: 0 10px;
		overflow: hidden;
	}
	.recommend2-title{
		width: 112px;
		height: 50px;
		margin-top: 5px;
		overflow: hidden;
	}
</style>