<template>
	<div>
		<listItem
			v-for="(item,index) in getData"
			:key="index"
			:bookname="item.name"
			:bookauthor="item.author"
			:booknum="item.num"
			:bookbroadcast="item.broadcast"
		>
			<img src="../../../../static/img/book_list_item.png" slot="book-list-item-img-slot">
		</listItem>
		<listItemend></listItemend>
	</div>
</template>

<script>
	import listItem from './book-list-item'
	import listItemend from './book-list-itemend'

	import {mapGetters} from 'vuex'

	export default{
		components:{
			listItem,
			listItemend
		},
		computed:mapGetters([
			'getData'
		])
	}
</script>