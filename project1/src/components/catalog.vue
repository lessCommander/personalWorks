<template>
	<div class="catalog">
		<div class="cata-title">请选择配件：</div>
		<ul>
			<li 
				v-for="item in catalogs"
				:key="item.id"
				:class="{active: item.selected}"
				@click="fnSel(item.id)"
			>{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
	import Event1 from '../router/bus.js'
	export default {
		data(){
			return {
				catalogs: [
					{
						id: 1,
						name: 'CPU',
						selected: true
					},
					{
						id: 2,
						name: '主板',
						selected: false
					},
					{
						id: 3,
						name: '内存',
						selected: false
					},
					{
						id: 4,
						name: '显卡',
						selected: false
					}
					,
					{
						id: 5,
						name: '硬盘',
						selected: false
					}
					,
					{
						id: 6,
						name: '电源',
						selected: false
					},
					{
						id: 7,
						name: '机箱',
						selected: false
					}
				]
			}
		},
		props:[
			'pubEvent'
		],
		mounted(){
			this.getSelCatalog(); //子组件间接收数据，公共自定义事件
		},
		methods: {
			getSelCatalog(){
				let self = this;
				Event1.$on('selCatalog', function(id){
					self.catalogs.forEach(item => item.selected = item.id === id);
				});
				
			},
			fnSel(id){
				Event1.$emit('selCatalog', id);	//子组件间发送数据，公共自定义事件
			}
		}
	}
</script>

<style>
	.catalog{
		height: 70px;
	}
	.catalog .cata-title{
		color: #288bde;
	}
	.catalog ul{
		margin-top: 0;
		padding: 10px 0px;
		list-style: none;
	}
	.catalog ul li{
		width: 100px;
		height: 26px;
		text-align: center;
		line-height: 26px;
		border: 2px solid #eee;
		background-color: #eee;
		float: left;
		margin-right: 10px;
		cursor: pointer;
		border-radius: 4px;
	}
	.catalog li.active{
		background-color: #fff;
		border: 2px solid #288bde;
	}
</style>