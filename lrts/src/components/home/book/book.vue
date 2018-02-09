<template>
	<div class="book">
		<div class="book-head">
			<ptitle pname="书城"></ptitle>
		</div>
		<div class="book-content">
			<div class="book-content-wrap">
				<div class="b-title">收听榜单</div>
				<div class="b-list">
					<div class="b-list-title">
						<ul>
							<li class="active"><router-link to="/book/list1">热门榜</router-link></li>
							<li><router-link to="/book/list2">好评榜</router-link></li>
							<li><router-link to="/book/list3">搜索榜</router-link></li>
							<li><router-link to="/book/list4">下载榜</router-link></li>
						</ul>
					</div>
					<div class="b-list-content">
						<router-view></router-view>
					</div>
				</div>
			</div>
		</div>
		<footer class="home-footer">
            <homefooter></homefooter>
        </footer>
	</div>
</template>

<script>
	import ptitle from '../publicTitle.vue'
	import homefooter from '../../homefooter'

	export default{
		components:{
			ptitle,
			homefooter
		}
	}
</script>

<style scoped>
	.book{
		width: 100%;
		position: relative;
	}
	.book-head{
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
	}
	.book-content{
		min-height: 608px;
		position: relative;
		left: 0;
		top: 47px;
		background-color: #eee;
		padding: 7px;
		width: 100%;
	}
	.book-content-wrap{
		background-color: #fff;
	}
	.b-title{
		display: inline-block;
		color: #fff;
		background-color: #fc6520;
		margin-top: 15px;
		margin-left: 15px;
		padding: 2px 6px;
		border-radius: 15px;
	}
	.b-list{
		margin-top: 12px;
	}
	.b-list-title ul{
		list-style: none;
		display: flex;
	}
	.b-list-title ul li{
		float: left;
		flex: 1;
		padding: 10px;
		text-align: center;
	}
	.b-list-title ul li.active a{
		color: #fc6520;
	}
	.b-list-title ul li a, a:active{
        text-decoration: none;
	}
	.b-list-content{
	}
</style>