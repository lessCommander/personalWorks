<template>
	<div class="recommend3-inner">
		<ul>
			<li v-for="item in recommend3arr">
				<a href="#">
					<div class="recommend3-img">
						<img :src="item.img" alt="">
					</div>
					<div class="recommend3-title">
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
			'recommend3arr'
		]
	}
</script>

<style scoped>
	.recommend3-inner > ul{
		list-style: none;
	}
	.recommend3-inner > ul > li{
		float: left;
		margin: 0 15px;
		overflow: hidden;
	}
	.recommend3-title{
		width: 70px;
		height: 30px;
		margin-top: 5px;
		text-align: center;
		overflow: hidden;
	}
</style>