<template>
	<div class="goods">
		<div class="des">
			已找到的<span>{{allGoods[0][curIndex]}}</span>：
		</div>
		<div class="goods-wrap">
			<goodsChild
				v-for="(item, index) in curGoods"
				:key="index"
				:gname="item.name"
				:gprice="item.price"
			>
				<img slot="simg" src="../assets/mydiy_bg.png" alt="">
				<p slot="sbtn">
					<button class="g-btn" @click="useGood(item.name, item.price)">选用</button>
				</p>
			</goodsChild>
		</div>
		<div class="footer-nav">
			<ol>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
			</ol>
		</div>
	</div>
</template>

<script>
	import Event1 from '../router/bus.js'
	import goodsChild from './goodsChild'
	export default {
		components: {
			goodsChild
		},
		data() {
			return {
				curIndex: 0,
				curGoods: [	//当前配件数组，例如CPU
					{
						name: 'AMD Ryzen 7 1800X',
						price: 3999
					},
					{
						name: '酷睿i7-8705G',
						price: 4899
					},
					{
						name: 'Intel酷睿i5 8400',
						price: 1599
					},
					{
						name: 'Intel酷睿i7 8700K',
						price: 3399
					}
				],
				allGoods: [
					['CPU', 'CPU', '主板', '内存', '显卡', '硬盘', '电源', '机箱'],
					[
						{
							name: 'AMD Ryzen 7 1800X',
							price: 3999
						},
						{
							name: '酷睿i7-8705G',
							price: 4899
						},
						{
							name: 'Intel酷睿i5 8400',
							price: 1599
						},
						{
							name: 'Intel酷睿i7 8700K',
							price: 3399
						}
					],
					[
						{
							name: '微星X299',
							price: 4999
						},
						{
							name: '华硕玩家国度MAXIMUS X FORMULA',
							price: 3799
						},
						{
							name: '微星Z370-A PRO',
							price: 999
						},
						{
							name: '华硕(ASUS)STRIX X370-I GAMING',
							price: 1799
						}
					],
					[
						{
							name: '威刚万紫千红 DDR4 2400 8G',
							price: 749
						},
						{
							name: '金士顿DDR4 2400 8G',
							price: 419
						},
						{
							name: '金士顿骇客神条 Fury DDR4 2400 8G',
							price: 729
						},
						{
							name: '铭瑄巨无霸F1 8G',
							price: 399
						}
					],
					[
						{
							name: 'NVIDIA GTX1080TI 11GB 定制公版',
							price: 5990
						},
						{
							name: '华硕CERBERUS-GTX1070TI-A8G',
							price: 3799
						},
						{
							name: '微星GTX 1060 GAMING X 6G',
							price: 2399
						},
						{
							name: 'NVIDIA GTX1050 TI 4GB',
							price: 1199
						}
					],
					[
						{
							name: '三星960 EVO M.2 SSD 250G',
							price: 1099
						},
						{
							name: '浦科特PX-128M8VC',
							price: 399
						},
						{
							name: '铭瑄MS240GBX5',
							price: 469
						},
						{
							name: '东芝TR200 240G',
							price: 579
						}
					],
					[
						{
							name: '航嘉MVP P850',
							price: 1099
						},
						{
							name: '游戏悍将GX600',
							price: 499
						},
						{
							name: '航嘉冷静王至尊版 500W',
							price: 399
						},
						{
							name: '全汉 炫魔MX550',
							price: 539
						}
					],
					[
						{
							name: '酷冷至尊MasterBox Lite 5',
							price: 299
						},
						{
							name: '撒哈拉星际迷航III HY定制',
							price: 1399
						},
						{
							name: '金河田21+峥嵘Z1',
							price: 329
						},
						{
							name: '游戏悍将 黑金',
							price: 599
						}
					],
					[
						{
							name: '飞利浦241P8QPTKEB',
							price: 1499
						},
						{
							name: 'AOC C3208VWQ5',
							price: 1999
						},
						{
							name: '戴尔SP2318H',
							price: 1199
						},
						{
							name: 'HKC GF51',
							price: 929
						}
					],
					[
						{
							name: 'Tt冰核水冷套装',
							price: 1299
						},
						{
							name: '爱国者 冰魄T240 RGB水冷散热器',
							price: 299
						},
						{
							name: '九州风神玄冰400雪豹PLUS版',
							price: 129
						},
						{
							name: '海盗船HD140 RGB',
							price: 549
						}
					]
				]
			}
		},
		mounted() {
			this.jumpToGood(); //子组件间接收数据，公共自定义事件
		},
		methods: {
			jumpToGood(){
				let self = this;
				Event1.$on('selCatalog', function(id){
					self.curIndex = id;
					self.curGoods = self.allGoods[id];
				});
			},
			useGood(gname, gprice){
				Event1.$emit('useGood', gname, gprice);
			}
		}
	}
</script>

<style>
	.goods{
		float: left;
		width: 500px;
		height: 600px;
		border: 2px solid #eee;
		border-radius: 4px;
		margin-top: 10px;

	}
	.des{
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		font-size: 16px;
		color: #288bde;
		background-color: #eee;
	}
	.goods-wrap{
		width: 500px;
		height: 510px;
		overflow: hidden;
	}
	.g-btn{
		display: inline-block;
		width: 80px;
		padding: 6px 12px;
		margin-bottom: 0;
		font-size: 14px;
		font-weight: 400;
		line-height: 1.428;
		text-align: center;
		color: #999;
		background-color: #eee;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
		border-radius: 4px;
		border: 1px solid transparent;
	}
	.g-btn:hover{
		color: #fff;
		background-color: #288bde;
	}
	.footer-nav{
		height: 40px;
		line-height: 40;
	}
	.footer-nav ol{
		margin: 0;
		padding: 0;
		list-style: none;
		float: right;
		width: 240px;
		height: 30px;
	}
	.footer-nav ol li{
		float: left;
		width: 30px;
		height: 30px;
		line-height: 30px;
		margin-left: 5px;
		color: #999;
		background-color: #eee;
		text-align: center;
		cursor: pointer;
	}
	.footer-nav ol li:hover{

	}
	.footer-nav ol li:first-child{
		color: #fff;
		background-color: #288bde;
	}
</style>