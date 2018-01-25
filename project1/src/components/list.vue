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
					v-for="i in widgets"
					:key="i.id"
				 	:class="{tractive: i.selected}"
				 	@click="fnSel(i.id)"
				 >
					<td>{{i.name}}</td>
					<td :title="i.type">{{i.type}}</td>
					<td>{{i.num}}</td>
					<td>{{i.price}}</td>
					<td>
						<span
							class="del"
							v-html="i.operate">
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import Event1 from '../router/bus.js'
	export default{
		data(){
			return {
				widgets: [
					{
						id: 1,
						name: 'CPU',
						type: '',
						num: '',
						price: '',
						operate: '',
						selected: true
					},
					{
						id: 2,
						name: '主板',
						type: '',
						num: '',
						price: '',
						operate: '',
						selected: false
					},
					{
						id: 3,
						name: '内存',
						type: '',
						num: '',
						price: '',
						operate: '',
						selected: false
					},
					{
						id: 4,
						name: '显卡',
						type: '',
						num: '',
						price: '',
						operate: '',
						selected: false
					},
					{
						id: 5,
						name: '硬盘',
						type: '',
						num: '',
						price: '',
						operate: '',
						selected: false
					},
					{
						id: 6,
						name: '电源',
						type: '',
						num: '',
						price: '',
						operate: '',
						selected: false
					},
					{
						id: 7,
						name: '机箱',
						type: '',
						num: '',
						price: '',
						operate: '',
						selected: false
					}
				]
			}
		},
		mounted(){
			this.getSelCatalog(); //子组件间接收数据，公共自定义事件
		},
		methods:{
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
					self.widgets[curId-1].type = gname;
					self.widgets[curId-1].num = 1;
					self.widgets[curId-1].price = gprice;
					self.widgets[curId-1].operate = '&times;';
				});
			},
			fnSel(id){
				Event1.$emit('selCatalog', id);	//子组件间发送数据，公共自定义事件
			}
		}
	}
</script>

<style>
	.list{
		float: left;
		width: 300px;
		height: 400px;
		border: 2px solid #288bde;
		border-radius: 4px;
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
		line-height: 20px;
		cursor: pointer;
		border-radius: 50%;
	}
	.tb .del:hover{
		display: inline-block;
		width: 20px;
		height: 20px;
		color: #fff;
		background-color: #288bde;
	}
</style>