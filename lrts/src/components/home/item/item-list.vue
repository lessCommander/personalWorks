<template>
	<div>
		<listItem
			v-for="(item,index) in itemData"
			:key="index"
			:bookname="item.name"
			:bookauthor="item.author"
			:booknum="item.num"
			:updatetime="item.updatetime"
		>
			<img src="../../../assets/img/item_list_item.png" slot="item-list-item-img-slot">
		</listItem>
	</div>
</template>

<script>
	import listItem from './item-list-item'

	export default{
		components:{
			listItem
		},
		data(){
			return {
				itemData: [
					{
						name: '一半FM',
						author: '恋爱成长学会',
						num: '15',
						updatetime: '7小时前'
					},
					{
						name: '404电影2018专辑',
						author: '404电影',
						num: '1',
						updatetime: '7小时前'
					},
					{
						name: '一些无处安放临时起意的企划',
						author: '音熊联萌',
						num: '1',
						updatetime: '2月19日'
					},
					{
						name: '随便读读',
						author: '润物细芜',
						num: '3',
						updatetime: '1天前'
					},
					{
						name: '顾氏庄园',
						author: 'S.N.工作室',
						num: '1',
						updatetime: '7小时前'
					},
					{
						name: '小耳朵的音乐旅行',
						author: '润物细芜',
						num: '5',
						updatetime: '7小时前'
					},
					{
						name: '假如你只剩3首歌',
						author: '主播罗洋',
						num: '5',
						updatetime: '7小时前'
					},
					{
						name: '好好说话，有效沟通',
						author: '硕博心理',
						num: '10',
						updatetime: '7小时前'
					},
					{
						name: '易经',
						author: '字子逸',
						num: '10',
						updatetime: '7小时前'
					},
					{
						name: '团圆比什么都重要',
						author: '静听心诉',
						num: '1',
						updatetime: '1天前'
					}
				]
			}
		}
	}
</script>