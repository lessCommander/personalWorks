<template>
	<div>
		<listItem
			v-for="(item,index) in itemData"
			:key="index"
			:brname="item.name"
			:brauthor="item.author"
		>
			<img src="../../../assets/img/broadcaster_list_item.png" slot="broadcaster-list-item-img-slot">
		</listItem>
	</div>
</template>

<script>
	import listItem from './broadcaster-list-item'

	export default{
		components:{
			listItem
		},
		data(){
			return {
				itemData: [
					{
						name: '剑魄琴心',
						author: '剑魄琴心的专辑'
					},
					{
						name: 'FM良人与猫',
						author: '《FM良人与猫》'
					},
					{
						name: 'NJ青岚、NJ茗源',
						author: '青心岚语、浅酌香茗'
					},
					{
						name: '水墨玲珑',
						author: '人生若只如初见'
					},
					{
						name: '知性STUDIO',
						author: '知性-两性清流'
					},
					{
						name: '开会啦会长',
						author: '开会啦'
					},
					{
						name: 'S.N.工作室',
						author: '顾氏庄园'
					},
					{
						name: '堡叔讲故事',
						author: '--'
					},
					{
						name: '春光周',
						author: '春光周'
					},
					{
						name: '杨朕豪',
						author: '有话豪说'
					}
				]
			}
		}
	}
</script>