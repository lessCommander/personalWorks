<template>
	<div class="item">
		<div class="item-head-wrap">
			<div class="item-head">
				<ptitle pname="节目"></ptitle>
			</div>
		</div>
		<div class="item-wrap">
			<div class="item-banner">
				<publicQuote quotetxt="节目推荐"></publicQuote>
				<publicRecommend2 :recommend2arr='rec2arr'></publicRecommend2>
			</div>
			<div class="item-content">
				<publicQuote quotetxt="最新上传"></publicQuote>
				<div class="i-list">
					<ilist></ilist>
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
	import publicRecommend2 from '../publicRecommend2.vue'
	import ilist from './item-list.vue'

	export default{
		components:{
			ptitle,
			homefooter,
			publicQuote,
			publicRecommend2,
			ilist
		},
		data(){
			return {
				rec2arr: [
					{txt: '撩汉秘籍：如何让你爱的人上你', img: '../../../src/assets/img/item_recommend.png'},
					{txt: '每日头条脱口秀', img: '../../../src/assets/img/item_recommend.png'},
					{txt: '石榴妈妈的故事盒子', img: '../../../src/assets/img/item_recommend.png'},
					{txt: '汶霖FM', img: '../../../src/assets/img/item_recommend.png'},
					{txt: '老陈是个说书人', img: '../../../src/assets/img/item_recommend.png'},
					{txt: '好好说话，说好听的话', img: '../../../src/assets/img/item_recommend.png'}
				]
			}
		}
	}
</script>

<style scoped>
	.item{
		width: 100%;
		position: relative;
		background-color: #eee;
	}
	.item-head-wrap{
		height: 47px;
	}
	.item-head{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
	.item-wrap{
		min-height: 608px;
		padding: 7px;
	}
	.item-banner{
		margin-bottom: 7px;
	}
	.item-content, .item-banner{
		background-color: #fff;
	}
</style>