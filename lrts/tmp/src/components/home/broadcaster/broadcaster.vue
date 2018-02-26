<template>
	<div class="broadcaster">
		<div class="broadcaster-head-wrap">
			<div class="broadcaster-head">
				<ptitle pname="热门主播"></ptitle>
			</div>
		</div>
		<div class="broadcaster-wrap">
			<div class="broadcaster-banner">
				<publicQuote quotetxt="主播推荐"></publicQuote>
				<publicRecommend3 :recommend3arr='rec3arr'></publicRecommend3>
			</div>
			<div class="broadcaster-content">
				<publicQuote quotetxt="新晋主播"></publicQuote>
				<div class="br-list">
					<brlist></brlist>
				</div>
			</div>
			<footer class="home-footer">
	            <homefooter></homefooter>
	        </footer>
		</div>
	</div>
</template>

<script>
	import ptitle from '../publicTitle.vue'
	import homefooter from '../../homefooter.vue'
	import publicQuote from '../publicQuote.vue'
	import publicRecommend3 from '../publicRecommend3.vue'
	import brlist from './broadcaster-list.vue'

	export default{
		components:{
			ptitle,
			homefooter,
			publicQuote,
			publicRecommend3,
			brlist
		},
		data(){
			return {
				rec3arr: [
					{txt: '艾宝良', img: '../../../../static/img/broadcaster_recommend.png'},
					{txt: '老墨家族', img: '../../../../static/img/broadcaster_recommend.png'},
					{txt: '武志红', img: '../../../../static/img/broadcaster_recommend.png'},
					{txt: '青音', img: '../../../../static/img/broadcaster_recommend.png'},
					{txt: '郎永淳', img: '../../../../static/img/broadcaster_recommend.png'},
					{txt: '吴晓波', img: '../../../../static/img/broadcaster_recommend.png'},
					{txt: '尹建莉', img: '../../../../static/img/broadcaster_recommend.png'},
					{txt: '李峙', img: '../../../../static/img/broadcaster_recommend.png'}
				]
			}
		}
	}
</script>

<style scoped>
	.broadcaster{
		width: 100%;
		position: relative;
		background-color: #eee;
	}
	.broadcaster-head-wrap{
		height: 47px;
	}
	.broadcaster-head{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
	.broadcaster-wrap{
		min-height: 608px;
		padding: 7px;
	}
	.broadcaster-banner{
		margin-bottom: 7px;
	}
	.broadcaster-content, .broadcaster-banner{
		background-color: #fff;
	}
</style>