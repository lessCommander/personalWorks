<template>
	<div class="catalog">
		<div class="cata-title">请选择配件：</div>
		<div class="cata-wrap1">
			<ul>
				<li 
					v-for="item in catalogs"
					:key="item.id"
					:class="{active: item.selected}"
					@click="fnSel(item.id)"
				>{{item.name}}</li>
			</ul>
		</div>
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
					},
					{
						id: 8,
						name: '显示器',
						selected: false
					},
					{
						id: 9,
						name: '散热器',
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
		width: 100%;
		height: 100%;
		float: left;
	}
	.catalog .cata-title{
		color: #288bde;
	}
	.cata-wrap1{
	}
	.cata-wrap1 ul{
		list-style: none;
	}
	.cata-wrap1 ul li{
		width: 100px;
		height: 26px;
		text-align: center;
		line-height: 26px;
		border: 2px solid #eee;
		background-color: #eee;
		float: left;
		margin: 10px 10px 0 0;
		cursor: pointer;
		border-radius: 4px;
	}
	.cata-wrap1 li.active{
		background-color: #fff;
		border: 2px solid #288bde;
	}
</style>