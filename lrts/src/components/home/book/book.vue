<template>
	<div class="book">
		<div class="book-head-wrap">
			<div class="book-head">
				<ptitle pname="书城"></ptitle>
			</div>
		</div>
		<div class="book-wrap">
			<div class="book-banner">
				<publicQuote quotetxt="专题推荐"></publicQuote>
				<publicRecommend1 class="recommend">
					<img slot="recommend1-img-slot1" src="../../../assets/img/book_recommend.png" alt="">
					<img slot="recommend1-img-slot2" src="../../../assets/img/book_recommend.png" alt="">
					<img slot="recommend1-img-slot3" src="../../../assets/img/book_recommend.png" alt="">
					<img slot="recommend1-img-slot4" src="../../../assets/img/book_recommend.png" alt="">
				</publicRecommend1>
			</div>
			<div class="book-banner">
				<publicQuote quotetxt="小便推荐"></publicQuote>
				<publicRecommend2
					:recommend2arr="rec2arr"
				>
				</publicRecommend2>
			</div>
			<div class="book-banner">
				<publicQuote quotetxt="新书推荐"></publicQuote>
				<publicRecommend2
					:recommend2arr="rec2arr2"
				>
				</publicRecommend2>
			</div>
			<div class="book-content">
				<div class="b-title">收听榜单</div>
				<div class="b-list">
					<div class="b-list-title">
						<ul>
							<li
								v-for="(item, index) in oTitle"
								:class="{active: (index == getBookCurInx)}"
							>
								<router-link :to="'/book/list' + (index + 1)">
									{{item}}
								</router-link>
							</li>
						</ul>
					</div>
					<div class="b-list-content">
						<router-view></router-view>
					</div>
				</div>
			</div>
			<footer class="home-footer">
	            <homefooter></homefooter>
	        </footer>
		</div>
	</div>
</template>

<script>
	import ptitle from '../publicTitle'
	import publicQuote from '../publicQuote'
	import homefooter from '../../homefooter'
	import publicRecommend1 from '../publicRecommend1'
	import publicRecommend2 from '../publicRecommend2'

    import {mapGetters} from 'vuex'

	export default{
		data(){
			return {
				oTitle:['热门榜', '好评榜', '搜索榜', '下载榜'],
				rec2arr: [
					{txt: '校园修真狂少', img: '../../../src/assets/img/book_recommend2.png'},
					{txt: '丑仙记', img: '../../../src/assets/img/book_recommend2.png'},
					{txt: '盒子历险记：神叨叨研究所', img: '../../../src/assets/img/book_recommend2.png'},
					{txt: '古董局中局（三部合集）', img: '../../../src/assets/img/book_recommend2.png'},
					{txt: '天墓之禁地迷城', img: '../../../src/assets/img/book_recommend2.png'},
					{txt: '大泼猴', img: '../../../src/assets/img/book_recommend2.png'}
				],
				rec2arr2: [
					{txt: '空间之丑颜农女', img: '../../../src/assets/img/book_recommend3.png'},
					{txt: '最中国史', img: '../../../src/assets/img/book_recommend3.png'},
					{txt: '官场', img: '../../../src/assets/img/book_recommend3.png'},
					{txt: '爸爸妈妈别担心', img: '../../../src/assets/img/book_recommend3.png'},
					{txt: '邪王追妻：废材逆天小姐', img: '../../../src/assets/img/book_recommend3.png'},
					{txt: '财务自由中级书单，从入门到进阶', img: '../../../src/assets/img/book_recommend3.png'}
				]
			}
		},
		components:{
			ptitle,
			homefooter,
			publicQuote,
			publicRecommend1,
			publicRecommend2
		},
		computed:mapGetters([
			'getBookCurInx'
		])

	}
</script>

<style scoped>
	.book{
		width: 100%;
		position: relative;
		background-color: #eee;
	}
	.book-head-wrap{
		height: 47px;
	}
	.book-head{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
	}
	.book-wrap{
		min-height: 608px;
		padding: 7px;
	}
	.book-banner{
		margin-bottom: 7px;
	}
	.recommend{
		margin: 0 0 0 6px;
	}
	.book-content, .book-banner{
		background-color: #fff;
	}
	.b-title{
		display: inline-block;
		color: #fff;
		background-color: #fc6520;
		margin: 16px 8px;
		padding: 2px 6px;
		border-radius: 15px;
	}
	.b-list-title ul{
		list-style: none;
		display: flex;
	}
	.b-list-title ul li{
		float: left;
		flex: 1 1 auto;
		position: relative;
		overflow: hidden;
	}
	.b-list-title ul li a, a:active{
		display: block;
		padding: 10px;
		text-align: center;
		border-bottom: 1px solid #eee;
        text-decoration: none;
	}
	.b-list-title ul li.active:before{
		content: "";
		display: block;
		width: 7px;
		height: 7px;
		background-color: #fff;
		border-left: 1px solid #eee;
		border-top: 1px solid #eee;
		transform: rotateZ(45deg);
		position: absolute;
		left: 47%;
		bottom: -4px;
	}
	.b-list-title ul li.active a{
		color: #fc6520;
	}
</style>