<template>
	<div>
		<listItem
			bookname="name1"
			bookauthor="author1"
			booknum="100"
			bookbroadcast="100万"
		>
			<img src="../../../assets/img/book_list_item.png" slot="book-list-item-img-slot">
		</listItem>
		<listItem
			bookname="name1"
			bookauthor="author1"
			booknum="100"
			bookbroadcast="100万"
		>
			<img src="../../../assets/img/book_list_item.png" slot="book-list-item-img-slot">
		</listItem>
		<listItem
			bookname="name1"
			bookauthor="author1"
			booknum="100"
			bookbroadcast="100万"
		>
			<img src="../../../assets/img/book_list_item.png" slot="book-list-item-img-slot">
		</listItem>
		<listItem
			bookname="name1"
			bookauthor="author1"
			booknum="100"
			bookbroadcast="100万"
		>
			<img src="../../../assets/img/book_list_item.png" slot="book-list-item-img-slot">
		</listItem>
		<listItem
			bookname="name1"
			bookauthor="author1"
			booknum="100"
			bookbroadcast="100万"
		>
			<img src="../../../assets/img/book_list_item.png" slot="book-list-item-img-slot">
		</listItem>
		<listItemend></listItemend>
	</div>
</template>

<script>
	import listItem from './book-list-item'
	import listItemend from './book-list-itemend'

	export default{
		components:{
			listItem,
			listItemend
		}
	}
</script>