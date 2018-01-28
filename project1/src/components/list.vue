<template>
	<div class="list">
		<table class="tb" cellpadding="0" cellspacing="0" border="0">
			<caption class="list-caption">
				配置清单
			</caption>
			<thead>
				<tr>
					<th>配件名称</th>
					<th>品牌型号</th>
					<th>数量</th>
					<th>单价</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(i, inx) in widgets"
					:key="i.id"
				 	:class="{tractive: i.selected}"
				 	@click="fnSel(i.id)"
				 >
					<td>{{i.name}}</td>
					<td :title="i.type">{{i.type}}</td>
					<td @click="changeNum">{{i.num}}</td>
					<td>{{i.price}}</td>
					<td>
						<span
							class="del"
							v-show="i.operate"
							@click="delGood(inx)"
						>&times;</span>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="total">
			<div class="total-wrap">
				<span>价格总计：</span>
				<span class="total-unit">￥</span>
				<span class="total-price">{{calcTotal}}</span>
			</div>
		</div>
		<pop class="pop-layer" :class="{pophide: bHide}"></pop>
	</div>
</template>

<script>
	import Event1 from '../router/bus.js'
	import pop from './pop.vue'
	export default{
		data(){
			return {
				bHide: true,	//选择数量窗口是否隐藏
				widgets: [
					{
						id: 1,
						name: 'CPU',
						type: '',
						num: '',
						price: '',
						operate: false,
						selected: true
					},
					{
						id: 2,
						name: '主板',
						type: '',
						num: '',
						price: '',
						operate: false,
						selected: false
					},
					{
						id: 3,
						name: '内存',
						type: '',
						num: '',
						price: '',
						operate: false,
						selected: false
					},
					{
						id: 4,
						name: '显卡',
						type: '',
						num: '',
						price: '',
						operate: false,
						selected: false
					},
					{
						id: 5,
						name: '硬盘',
						type: '',
						num: '',
						price: '',
						operate: false,
						selected: false
					},
					{
						id: 6,
						name: '电源',
						type: '',
						num: '',
						price: '',
						operate: false,
						selected: false
					},
					{
						id: 7,
						name: '机箱',
						type: '',
						num: '',
						price: '',
						operate: false,
						selected: false
					},
					{
						id: 8,
						name: '显示器',
						type: '',
						num: '',
						price: '',
						operate: false,
						selected: false
					},
					{
						id: 9,
						name: '散热器',
						type: '',
						num: '',
						price: '',
						operate: false,
						selected: false
					}
				]
			}
		},
		mounted(){
			this.getSelCatalog(); //子组件间接收数据，公共自定义事件
		},
		computed: {
			calcTotal(){	//计算总价格
				let arr = this.widgets,
					sum = 0;
				arr.forEach(function(o){
					let p = Number(o.price),
						n = Number(o.num);
					if(p){
						sum += p * n;
					}
				});
				return sum;
			}
		},
		methods: {
			getSelCatalog(){
				let self = this,
					curId = 1;
				Event1.$on('selCatalog', function(id){
					self.widgets.forEach(function(item){
						item.selected = item.id === id;
						curId = id;
					});
				});
				//接收选用的配件，如i5 8400，1350
				Event1.$on('useGood', function(gname, gprice){
					let widget = self.widgets[curId-1];
					widget.type = gname;
					widget.num = 1;
					widget.price = gprice;
					widget.operate = true;
				});
				//接收选择的数量
				Event1.$on('selNum', function(n){
					let widget = self.widgets[curId-1];
					widget.num = n;
					self.bHide = true;
				});
			},
			fnSel(id){
				Event1.$emit('selCatalog', id);	//子组件间发送数据，公共自定义事件
			},
			delGood(id){	//删除配件
				let widget = this.widgets[id]
				widget.type = widget.num = widget.price = '';
				widget.operate = false;
			},
			changeNum(ev){	//更改数量
				var iTimer;
				if (ev.target.innerHTML != ''){
					var oPop = document.querySelector('.pop-layer'),
						popWidth = oPop.offsetWidth,
						x = ev.target.offsetLeft,
						y = ev.target.offsetTop,
						w = ev.target.offsetWidth,
						h = ev.target.offsetHeight;

					this.bHide = false;
					oPop.style.left = x + w/2 - popWidth/2 + 'px';
					oPop.style.top = y + h + 2 + 'px';
					popWidth = oPop.offsetWidth;
				}else{
					this.bHide = true;
				}
			}
		},
		components: {
			pop
		}
	}
</script>

<style>
	.list{
		float: left;
		width: 300px;
		height: 600px;
		border: 2px solid #288bde;
		margin: 10px 10px 10px 0;
		border-radius: 4px;
		position: relative;
	}
	.list .list-caption{
		height: 40px;
		line-height: 40px;
		font-size: 20px;
		color: #fff;
		background-color: #288bde;
		text-align: center;
	}
	.tb{
		border: none;
		width: 100%;
		cursor: default;
	}
	.tb td, .tb th{
		text-align: center;
		color: #666;
		font-size: 14px;
	}
	.tb th{
		font-weight: normal;
		height: 25px;
		line-height: 20px;
		background-color: #eee;
	}
	.tb tbody tr.tractive{
		background-color: #e9f3fc;
	}
	.tb td{
		height: 35px;
		line-height: 35px;
	}
	.tb td:nth-of-type(1){
		width: 20%;
	}
	.tb td:nth-of-type(2){
		width: 30%;
		max-width: 90px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.tb td:nth-of-type(3){
		width: 16%;
	}
	.tb td:nth-of-type(4){
		width: 16%;
	}
	.tb td:nth-of-type(5){
		width: 16%;
	}
	.tb td{
		border-bottom: 1px solid #ddd;
	}
	.tb .del{
		display: inline-block;
		width: 20px;
		height: 20px;
		line-height: 20px;
		cursor: pointer;
		border-radius: 50%;
	}
	.tb .del:hover{
		color: #fff;
		background-color: #288bde;
	}
	.total{
		width: 100%;
		height: 50px;
		position: absolute;
		left: 0;
		bottom: 0;
		text-align: right;
	}
	.total .total-wrap{
		margin-right: 20px;
	}
	.total .total-price, .total .total-unit{
		font-weight: bold;
		color: red;
		font-size: 12px;
	}
	.total .total-wrap .total-price{
		font-size: 24px;
	}
	.pop-layer{
		z-index: 100;
		position: absolute;
		left: 100px;
		top: 100px;
	}
	.pophide{
		/*display: none;*/
		visibility: hidden;
	}
</style>