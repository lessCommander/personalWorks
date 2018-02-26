<template>
	<div class="book-list-item">
		<div class="media">
			<div class="media-left media-middle">
				<a href="javascript:">
					<slot name="book-list-item-img-slot"></slot>
				</a>
			</div>
			<div class="media-body">
				<h4 class="media-heading">{{bookname}}</h4>
				<div>播音：{{bookauthor}}</div>
				<div>集数：{{booknum}} 播放：{{bookbroadcast}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:[
			'bookname',
			'bookauthor',
			'booknum',
			'bookbroadcast'
		]
	}

</script>

<style scoped>
	.book-list-item{
		padding: 10px 5px;
		color: #666;
		border-bottom: 1px solid #eee;
	}
	.media h4{
		color: #333;
	}
</style>