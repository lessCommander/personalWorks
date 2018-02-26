<template>
	<div class="aside">
		<div
			class="aside-overlayer"
			@click.self="showAsideBar(false)"
		>
			<div class="aside-inner">
				<div class="inner-main">
					<p class="h4">首页</p>
				</div>
				<div class="inner-nav">
					<p class="h4">导航</p>
					<div class="inner-nav-content">
						<div class="row">
							<div class="col-xs-5">
								<a href="#">书城</a>
							</div>
							<div class="col-xs-5">
								<a href="#">节目</a>
							</div>
							<div class="col-xs-2"></div>
						</div>
						<div class="row">
							<div class="col-xs-5">
								<a href="#">主播</a>
							</div>
							<div class="col-xs-5">
								<a href="#">活动</a>
							</div>
							<div class="col-xs-2"></div>
						</div>
					</div>
				</div>
				<div class="inner-sort">
					<p class="h4">分类</p>
					<p>
						<a href="#">儿童</a>
					</p>
				</div>
				<div
					class="inner-sort"
					v-for="(item, inx) in innerArr"
					:key="inx"
				>
					<a href="#">{{item}}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex'

	export default{
		data(){
			return{
				innerArr:[
					'人文',
					'有声小说',
					'财经',
					'曲艺戏曲',
					'文学',
					'相声评书',
					'外语',
					'健康',
					'生活',
					'成功',
					'历史'
				]
			}
		},
		methods:mapActions([
			'showAsideBar'
		])
	}
</script>

<style scoped>
	a{
		display: block;
		padding: 10px 0;
	}
	.aside{
		position: absolute;
		left: 0;
		top: 0;
		z-index: 9999;
	}
	.aside-overlayer{
		width: 414px;
		height: 1999px;
		background-color: rgba(0,0,0,0.4);
	}
	.aside-inner{
		position: fixed;
		top: 0;
		left: 0;
		width: 207px;
		height: 100%;
		background-color: #fff;
	}
	.aside-inner > div{
		padding: 0px 0;
	}
	.aside-inner > div > .h4{
		padding-left: 10px;
	}
	.aside-inner > div+div{
		border-top: 1px solid #eee;
	}
	.inner-nav-content{
		text-align: center;
	}
	.inner-sort a{
		margin: 0 10px;
		padding-left: 10px;
	}
</style>